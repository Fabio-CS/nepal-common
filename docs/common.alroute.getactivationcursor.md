<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@al/common](./common.md) &gt; [AlRoute](./common.alroute.md) &gt; [getActivationCursor](./common.alroute.getactivationcursor.md)

## AlRoute.getActivationCursor() method

This method will return the deepest activated, childless route within its first activated child. If this sounds obtuse, it is -- but's it's important for determining the "cursor" menu item within a menu hierarchy.

<b>Signature:</b>

```typescript
getActivationCursor(): AlRoute | undefined;
```
<b>Returns:</b>

`AlRoute | undefined`
