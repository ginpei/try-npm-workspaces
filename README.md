# Try npm workspaces

- [rfcs/0026-workspaces.md at latest · npm/rfcs](https://github.com/npm/rfcs/blob/latest/implemented/0026-workspaces.md)

> Add a set of features to the npm cli that provide support to managing multiple packages from within a singular top-level, root package.

## Basic setup

Let's say you have 2 modules: `main` and `sub`. You can specify them in `workspaces` field. You can also use wildcard like `"pakcages/*"` if you prefer.

`./package.json`

```json
{
  "workspaces": [
    "main",
    "sub"
  ]
}
```

In each local package, now you can specify another local package name described in its `package.json`.

`main/package.json`:

```json
{
  "name": "main",
  "dependencies": {
    "sub": ""
  }
}
```

`sub/package.json`

```json
{
  "name": "sub"
}
```

- `name` field is used to resolve (not directory name)
- `version` field is not used, apparently

## Notes

### If dir name and package name are different

npm recognizes `name` field in `package.json`.

If `package.json` in `sub/` directory sets `"subbbb"` to `name`, the module is `subbbb`. Also, if `main` depends on `sub`, it requires install `sub` package from npm repo.

Here is a result in `package-lock.json` when you have both.

```json
…
    "node_modules/sub": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/sub/-/sub-1.0.0.tgz",
      "integrity": "sha1-jKn2xK345ln5aVnfyKoJLriHW4E=",
      "dependencies": {
        "htmlparser2": "~3.9.2"
      }
    },
    "node_modules/subbbb": {
      "resolved": "sub",
      "link": true
    },
```

### Versions in the workspace

`version` filed in local package's `package.json` looks ignored. You don't have to specify it, I guess.

In the root `package-lock.json`, local package's versions become `"file:xxx"`

```json
…
  "dependencies": {
    "main": {
      "version": "file:main",
      "requires": {
        "sub": ""
      }
    },
    "sub": {
      "version": "file:sub",
      "requires": {
        "typescript": "^4.0.5"
      }
    },
```
