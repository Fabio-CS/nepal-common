<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@al/common](./common.md) &gt; [AlLocatorMatrix](./common.allocatormatrix.md)

## AlLocatorMatrix class

This class accepts a list of location descriptors, an acting URL, and an optional context specification, and provides the ability to calculate environment- and residency- specific target URLs.

<b>Signature:</b>

```typescript
export declare class AlLocatorMatrix 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(nodes, actingUri, context)](./common.allocatormatrix._constructor_.md) |  | Constructs a new instance of the <code>AlLocatorMatrix</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [totalSeeks](./common.allocatormatrix.totalseeks.md) | <code>static</code> | <code>number</code> |  |
|  [totalTime](./common.allocatormatrix.totaltime.md) | <code>static</code> | <code>number</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [escapeLocationPattern(uri)](./common.allocatormatrix.escapelocationpattern.md) |  | Escapes a domain pattern.<!-- -->All normal regex characters are escaped; \* is converted to \[a-zA-Z0-9\_\]+; and the whole expression is wrapped in ^....\*$. |
|  [findOne(filter)](./common.allocatormatrix.findone.md) |  |  |
|  [getActingNode()](./common.allocatormatrix.getactingnode.md) |  | Gets the currently acting node. |
|  [getBaseUrl(uri)](./common.allocatormatrix.getbaseurl.md) |  | Chops off fragments, query strings, and any trailing slashes, and returns what \*should\* be just the base URL. I make no promises about the quality of this code when confronted with incorrect or incomplete inputs. |
|  [getContext()](./common.allocatormatrix.getcontext.md) |  |  |
|  [getCurrentEnvironment()](./common.allocatormatrix.getcurrentenvironment.md) |  | Retrieves the ID of the environment associated with the current acting URL. |
|  [getNode(locTypeId, context)](./common.allocatormatrix.getnode.md) |  | Gets a service node by ID, optionally using a context to refine its selection logic. The context defaults to the locator matrix instance's current context; if the default is used, the result of the lookup will be stored for performance optimization. |
|  [getNodeByURI(targetURI)](./common.allocatormatrix.getnodebyuri.md) |  | Resolves a literal URI to a service node. |
|  [normalizeContext()](./common.allocatormatrix.normalizecontext.md) |  | This method normalizes the current context. In practice, this means mapping an insight location ID to the correct defender datacenter. In other words, it is "black magic." Or at least, dark gray. |
|  [remapLocationToURI(locTypeId, uri, environment, residency)](./common.allocatormatrix.remaplocationtouri.md) |  |  |
|  [reset()](./common.allocatormatrix.reset.md) |  | Resets locator state to its "factory presets" |
|  [resolveNodeURI(node)](./common.allocatormatrix.resolvenodeuri.md) |  |  |
|  [resolveURL(locTypeId, path, context)](./common.allocatormatrix.resolveurl.md) |  | Arguably the only important general-purpose functionality of this service. Calculates a URL from a location identifier, an optional path fragment, and an optional context. |
|  [search(filter)](./common.allocatormatrix.search.md) |  |  |
|  [setActingUri(actingUrl)](./common.allocatormatrix.setactinguri.md) |  |  |
|  [setActingUrl(actingUri)](./common.allocatormatrix.setactingurl.md) |  |  |
|  [setContext(context)](./common.allocatormatrix.setcontext.md) |  | Sets the acting context (preferred environment, data residency, location attributes). This acts as a merge against existing context, so the caller can provide only fragmentary information without borking things. |
|  [setLocations(nodes)](./common.allocatormatrix.setlocations.md) |  | Updates the locator matrix model with a set of service node descriptors. |
|  [timestamp(defaultValue)](./common.allocatormatrix.timestamp.md) |  |  |

