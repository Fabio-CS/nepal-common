<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@al/common](./common.md) &gt; [AlLocatorMatrix](./common.allocatormatrix.md) &gt; [escapeLocationPattern](./common.allocatormatrix.escapelocationpattern.md)

## AlLocatorMatrix.escapeLocationPattern() method

Escapes a domain pattern.

All normal regex characters are escaped; \* is converted to \[a-zA-Z0-9\_\]+; and the whole expression is wrapped in ^....\*$.

<b>Signature:</b>

```typescript
protected escapeLocationPattern(uri: string): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  uri | <code>string</code> |  |

<b>Returns:</b>

`string`

