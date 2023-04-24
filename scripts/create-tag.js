module.exports = async ({github, context, version}) => {

    const developBranch = await github.rest.repos.getBranch({
        owner: context.repo.owner,
        repo: context.repo.repo,
        branch: 'develop'
    });

    const tagName = require('../package.json').version;
    const developSHA = developBranch.data.commit.sha;

    console.log(`Creating a tag with title: ${tagName} and SHA: ${developSHA}`);

    const createdTag = await github.rest.git.createTag({
        owner: context.repo.owner,
        repo: context.repo.repo,
        tag: tagName,
        message: tagName,
        object: developSHA,
        type: "commit"
    });

    const createdRef = await github.rest.git.createRef({
        owner: context.repo.owner,
        repo: context.repo.repo,
        ref: 'refs/tags/' + tagName,
        sha: createdTag.data.sha
    });

    if (createdRef.status === 201) {
        console.log(`Tag ${tagName} was created successfully`);
    }
}
