module.exports = async ({github, context, version}) => {

    console.log('context');
    console.log(context);
    console.log('version');
    console.log(version);

    const developBranch = await github.rest.repos.getBranch({
        owner: context.repo.owner,
        repo: context.repo.repo,
        branch: 'develop'
    });

    const tagName = require('../package.json').version + '-test';
    const developSHA = developBranch.data.commit.sha;

    console.log('Test the tag');
    console.log('With tag name: ', tagName);
    console.log('With SHA: ', developSHA);

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
        console.log(`Tag ${tagName} created successfully`);
    }
}
