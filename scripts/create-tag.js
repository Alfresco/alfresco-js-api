module.exports = async ({github, context, version}) => {

    console.log('context');
    console.log(context);
    console.log('version');
    console.log(version);

    console.log('Test the tag');

    const tagName = 'test-2';
    const HEAD_SHA = 'c5e7db4e0d869b2d67b9bb6fe2344770c858e4ac';

    const createdTag = await github.rest.git.createTag({
        owner: context.repo.owner,
        repo: context.repo.repo,
        tag: tagName,
        message: tagName,
        object: HEAD_SHA,
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
