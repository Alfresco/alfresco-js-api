export class PathMatcher {
    static match(path: string, pattern: string) {
        return new RegExp(
            `^${
            pattern
                .replace(/(^|[^\*])\*(?!\*)/g, '$1([^\\/]*)')
                .replace(/\/\*\*\//g, '/(.+)/|/')
                .replace(/\*\*/g, '(.*)')
        }$`
        ).test(path);
    }
}
