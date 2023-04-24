module.exports = async ({github, context, version}) => {
    const organization = 'alfresco';

    const { data: availablePackages } = await github.rest.packages.getAllPackageVersionsForPackageOwnedByOrg({
        package_type: 'npm',
        package_name: 'adf-core',
        org: organization
    });

    console.log(availablePackages[0])

    console.log('context');
    console.log(context);
    console.log('version');
    console.log(version);
}
