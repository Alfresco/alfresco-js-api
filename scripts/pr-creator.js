const GitHub = require('github-api');
const args = require('yargs').argv;

const ORGANISATION = 'Alfresco';

class PrCreator {
    constructor(githubUser, githubRepo, token) {
        this.github = new GitHub({token});
        this.repo = this.github.getRepo(githubUser, githubRepo);
    }

    async create(title, head, base) {
        const { data: prs } = await this.repo.listPullRequests({ state: 'open', head: `${ORGANISATION}:${head}`, base });

        if (prs.length < 1) {
            const { data: pr } = await this.repo.createPullRequest({ title, head, base });
            return pr.number;
        }

        return prs[0].number;
    }
}

async function main() {
    const { token, title, head, repo } = args,
        prCreator = new PrCreator(ORGANISATION, repo, token);

    if (!token || !head || !title) {
        throw new Error('Each of the parameters have to be provided. --token, --title, --head');
    }

    return prCreator.create(title, head, 'develop');
}

main()
    .then(prNumber => {
        console.log(prNumber)
        process.exit(0);
    })
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
