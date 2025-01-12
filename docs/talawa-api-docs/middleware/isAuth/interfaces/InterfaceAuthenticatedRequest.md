[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [middleware/isAuth](../README.md) / InterfaceAuthenticatedRequest

# Interface: InterfaceAuthenticatedRequest

Defined in: [src/middleware/isAuth.ts:82](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/middleware/isAuth.ts#L82)

## Extends

- `Request`

## Properties

### ~~aborted~~

\> **aborted**: `boolean`

Defined in: node\_modules/@types/node/http.d.ts:1180

The `message.aborted` property will be `true` if the request has
been aborted.

#### Since

v10.1.0

#### Deprecated

Since v17.0.0,v16.12.0 - Check `message.destroyed` from \<a href="stream.html#class-streamreadable" class="type"\>stream.Readable\</a\>.

#### Inherited from

`Request.aborted`

***

### accepted

\> **accepted**: `MediaType`[]

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:526

Return an array of Accepted media types
ordered from highest quality to lowest.

#### Inherited from

`Request.accepted`

***

### app

\> **app**: `Application`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:672

#### Inherited from

`Request.app`

***

### baseUrl

\> **baseUrl**: `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:670

#### Inherited from

`Request.baseUrl`

***

### body

\> **body**: `any`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:651

#### Inherited from

`Request.body`

***

### closed

\> `readonly` **closed**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:126

Is `true` after `'close'` has been emitted.

#### Since

v18.0.0

#### Inherited from

`Request.closed`

***

### complete

\> **complete**: `boolean`

Defined in: node\_modules/@types/node/http.d.ts:1215

The `message.complete` property will be `true` if a complete HTTP message has
been received and successfully parsed.

This property is particularly useful as a means of determining if a client or
server fully transmitted a message before a connection was terminated:

```js
const req = http.request(\{
  host: '127.0.0.1',
  port: 8080,
  method: 'POST',
\}, (res) =\> \{
  res.resume();
  res.on('end', () =\> \{
    if (!res.complete)
      console.error(
        'The connection was terminated while the message was still being sent');
  \});
\});
```

#### Since

v0.3.0

#### Inherited from

`Request.complete`

***

### ~~connection~~

\> **connection**: `Socket`

Defined in: node\_modules/@types/node/http.d.ts:1221

Alias for `message.socket`.

#### Since

v0.1.90

#### Deprecated

Since v16.0.0 - Use `socket`.

#### Inherited from

`Request.connection`

***

### cookies

\> **cookies**: `any`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:654

#### Inherited from

`Request.cookies`

***

### destroyed

\> **destroyed**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:121

Is `true` after `readable.destroy()` has been called.

#### Since

v8.0.0

#### Inherited from

`Request.destroyed`

***

### errored

\> `readonly` **errored**: `null` \| `Error`

Defined in: node\_modules/@types/node/stream.d.ts:131

Returns error if the stream has been destroyed with an error.

#### Since

v18.0.0

#### Inherited from

`Request.errored`

***

### file?

\> `optional` **file**: `File`

Defined in: node\_modules/@types/multer/index.d.ts:41

`Multer.File` object populated by `single()` middleware.

#### Inherited from

`Request.file`

***

### files?

\> `optional` **files**: \{\} \| `File`[]

Defined in: node\_modules/@types/multer/index.d.ts:46

Array or dictionary of `Multer.File` object populated by `array()`,
`fields()`, and `any()` middleware.

#### Inherited from

`Request.files`

***

### fresh

\> `readonly` **fresh**: `boolean`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:636

Check if the request is fresh, aka
Last-Modified and/or the ETag
still match.

#### Inherited from

`Request.fresh`

***

### headers

\> **headers**: `IncomingHttpHeaders`

Defined in: node\_modules/@types/node/http.d.ts:1261

The request/response headers object.

Key-value pairs of header names and values. Header names are lower-cased.

```js
// Prints something like:
//
// \{ 'user-agent': 'curl/7.22.0',
//   host: '127.0.0.1:8000',
//   accept: '*' \}
console.log(request.headers);
```

Duplicates in raw headers are handled in the following ways, depending on the
header name:

* Duplicates of `age`, `authorization`, `content-length`, `content-type`, `etag`, `expires`, `from`, `host`, `if-modified-since`, `if-unmodified-since`, `last-modified`, `location`,
`max-forwards`, `proxy-authorization`, `referer`, `retry-after`, `server`, or `user-agent` are discarded.
To allow duplicate values of the headers listed above to be joined,
use the option `joinDuplicateHeaders` in request and createServer. See RFC 9110 Section 5.3 for more
information.
* `set-cookie` is always an array. Duplicates are added to the array.
* For duplicate `cookie` headers, the values are joined together with `; `.
* For all other headers, the values are joined together with `, `.

#### Since

v0.1.5

#### Inherited from

`Request.headers`

***

### headersDistinct

\> **headersDistinct**: `Dict`\<`string`[]\>

Defined in: node\_modules/@types/node/http.d.ts:1276

Similar to `message.headers`, but there is no join logic and the values are
always arrays of strings, even for headers received just once.

```js
// Prints something like:
//
// \{ 'user-agent': ['curl/7.22.0'],
//   host: ['127.0.0.1:8000'],
//   accept: ['*'] \}
console.log(request.headersDistinct);
```

#### Since

v18.3.0, v16.17.0

#### Inherited from

`Request.headersDistinct`

***

### ~~host~~

\> `readonly` **host**: `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:629

#### Deprecated

Use hostname instead.

#### Inherited from

`Request.host`

***

### hostname

\> `readonly` **hostname**: `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:624

Parse the "Host" header field hostname.

#### Inherited from

`Request.hostname`

***

### httpVersion

\> **httpVersion**: `string`

Defined in: node\_modules/@types/node/http.d.ts:1189

In case of server request, the HTTP version sent by the client. In the case of
client response, the HTTP version of the connected-to server.
Probably either `'1.1'` or `'1.0'`.

Also `message.httpVersionMajor` is the first integer and `message.httpVersionMinor` is the second.

#### Since

v0.1.1

#### Inherited from

`Request.httpVersion`

***

### httpVersionMajor

\> **httpVersionMajor**: `number`

Defined in: node\_modules/@types/node/http.d.ts:1190

#### Inherited from

`Request.httpVersionMajor`

***

### httpVersionMinor

\> **httpVersionMinor**: `number`

Defined in: node\_modules/@types/node/http.d.ts:1191

#### Inherited from

`Request.httpVersionMinor`

***

### ip

\> `readonly` **ip**: `undefined` \| `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:591

Return the remote address, or when
"trust proxy" is `true` return
the upstream addr.

Value may be undefined if the `req.socket` is destroyed
(for example, if the client disconnected).

#### Inherited from

`Request.ip`

***

### ips

\> `readonly` **ips**: `string`[]

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:601

When "trust proxy" is `true`, parse
the "X-Forwarded-For" ip address list.

For example if the value were "client, proxy1, proxy2"
you would receive the array `["client", "proxy1", "proxy2"]`
where "proxy2" is the furthest down-stream.

#### Inherited from

`Request.ips`

***

### isAuth?

\> `optional` **isAuth**: `boolean`

Defined in: [src/middleware/isAuth.ts:83](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/middleware/isAuth.ts#L83)

***

### locale

\> **locale**: `string`

Defined in: node\_modules/@types/i18n/index.d.ts:456

#### Inherited from

`Request.locale`

***

### method

\> **method**: `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:656

**Only valid for request obtained from Server.**

The request method as a string. Read only. Examples: `'GET'`, `'DELETE'`.

#### Since

v0.1.1

#### Inherited from

`Request.method`

***

### next?

\> `optional` **next**: `NextFunction`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:679

#### Inherited from

`Request.next`

***

### originalUrl

\> **originalUrl**: `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:666

#### Inherited from

`Request.originalUrl`

***

### params

\> **params**: `ParamsDictionary`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:658

#### Inherited from

`Request.params`

***

### path

\> `readonly` **path**: `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:619

Short-hand for `url.parse(req.url).pathname`.

#### Inherited from

`Request.path`

***

### protocol

\> `readonly` **protocol**: `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:574

Return the protocol string "http" or "https"
when requested with TLS. When the "trust proxy"
setting is enabled the "X-Forwarded-Proto" header
field will be trusted. If you're running behind
a reverse proxy that supplies https for you this
may be enabled.

#### Inherited from

`Request.protocol`

***

### query

\> **query**: `ParsedQs`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:660

#### Inherited from

`Request.query`

***

### rawHeaders

\> **rawHeaders**: `string`[]

Defined in: node\_modules/@types/node/http.d.ts:1301

The raw request/response headers list exactly as they were received.

The keys and values are in the same list. It is _not_ a
list of tuples. So, the even-numbered offsets are key values, and the
odd-numbered offsets are the associated values.

Header names are not lowercased, and duplicates are not merged.

```js
// Prints something like:
//
// [ 'user-agent',
//   'this is invalid because there can be only one',
//   'User-Agent',
//   'curl/7.22.0',
//   'Host',
//   '127.0.0.1:8000',
//   'ACCEPT',
//   '*' ]
console.log(request.rawHeaders);
```

#### Since

v0.11.6

#### Inherited from

`Request.rawHeaders`

***

### rawTrailers

\> **rawTrailers**: `string`[]

Defined in: node\_modules/@types/node/http.d.ts:1319

The raw request/response trailer keys and values exactly as they were
received. Only populated at the `'end'` event.

#### Since

v0.11.6

#### Inherited from

`Request.rawTrailers`

***

### readable

\> **readable**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:77

Is `true` if it is safe to call [read](InterfaceAuthenticatedRequest.md#read), which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### Since

v11.4.0

#### Inherited from

`Request.readable`

***

### readableAborted

\> `readonly` **readableAborted**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:71

**`Experimental`**

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### Since

v16.8.0

#### Inherited from

`Request.readableAborted`

***

### readableDidRead

\> `readonly` **readableDidRead**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:83

**`Experimental`**

Returns whether `'data'` has been emitted.

#### Since

v16.7.0, v14.18.0

#### Inherited from

`Request.readableDidRead`

***

### readableEncoding

\> `readonly` **readableEncoding**: `null` \| `BufferEncoding`

Defined in: node\_modules/@types/node/stream.d.ts:88

Getter for the property `encoding` of a given `Readable` stream. The `encoding` property can be set using the [setEncoding](InterfaceAuthenticatedRequest.md#setencoding) method.

#### Since

v12.7.0

#### Inherited from

`Request.readableEncoding`

***

### readableEnded

\> `readonly` **readableEnded**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:93

Becomes `true` when [`'end'`](https://nodejs.org/docs/latest-v22.x/api/stream.html#event-end) event is emitted.

#### Since

v12.9.0

#### Inherited from

`Request.readableEnded`

***

### readableFlowing

\> `readonly` **readableFlowing**: `null` \| `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:99

This property reflects the current state of a `Readable` stream as described
in the [Three states](https://nodejs.org/docs/latest-v22.x/api/stream.html#three-states) section.

#### Since

v9.4.0

#### Inherited from

`Request.readableFlowing`

***

### readableHighWaterMark

\> `readonly` **readableHighWaterMark**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:104

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### Since

v9.3.0

#### Inherited from

`Request.readableHighWaterMark`

***

### readableLength

\> `readonly` **readableLength**: `number`

Defined in: node\_modules/@types/node/stream.d.ts:111

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Since

v9.4.0

#### Inherited from

`Request.readableLength`

***

### readableObjectMode

\> `readonly` **readableObjectMode**: `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:116

Getter for the property `objectMode` of a given `Readable` stream.

#### Since

v12.3.0

#### Inherited from

`Request.readableObjectMode`

***

### res?

\> `optional` **res**: `Response`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:678

After middleware.init executed, Request will contain res and next properties
See: express/lib/middleware/init.js

#### Inherited from

`Request.res`

***

### route

\> **route**: `any`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:662

#### Inherited from

`Request.route`

***

### secure

\> `readonly` **secure**: `boolean`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:581

Short-hand for:

   req.protocol == 'https'

#### Inherited from

`Request.secure`

***

### signedCookies

\> **signedCookies**: `any`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:664

#### Inherited from

`Request.signedCookies`

***

### socket

\> **socket**: `Socket`

Defined in: node\_modules/@types/node/http.d.ts:1233

The `net.Socket` object associated with the connection.

With HTTPS support, use `request.socket.getPeerCertificate()` to obtain the
client's authentication details.

This property is guaranteed to be an instance of the `net.Socket` class,
a subclass of `stream.Duplex`, unless the user specified a socket
type other than `net.Socket` or internally nulled.

#### Since

v0.3.0

#### Inherited from

`Request.socket`

***

### stale

\> `readonly` **stale**: `boolean`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:643

Check if the request is stale, aka
"Last-Modified" and / or the "ETag" for the
resource has changed.

#### Inherited from

`Request.stale`

***

### statusCode?

\> `optional` **statusCode**: `number`

Defined in: node\_modules/@types/node/http.d.ts:1381

**Only valid for response obtained from ClientRequest.**

The 3-digit HTTP response status code. E.G. `404`.

#### Since

v0.1.1

#### Inherited from

`Request.statusCode`

***

### statusMessage?

\> `optional` **statusMessage**: `string`

Defined in: node\_modules/@types/node/http.d.ts:1388

**Only valid for response obtained from ClientRequest.**

The HTTP response status message (reason phrase). E.G. `OK` or `Internal Server Error`.

#### Since

v0.11.10

#### Inherited from

`Request.statusMessage`

***

### subdomains

\> `readonly` **subdomains**: `string`[]

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:614

Return subdomains as an array.

Subdomains are the dot-separated parts of the host before the main domain of
the app. By default, the domain of the app is assumed to be the last two
parts of the host. This can be changed by setting "subdomain offset".

For example, if the domain is "tobi.ferrets.example.com":
If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
If "subdomain offset" is 3, req.subdomains is `["tobi"]`.

#### Inherited from

`Request.subdomains`

***

### tokenExpired?

\> `optional` **tokenExpired**: `boolean`

Defined in: [src/middleware/isAuth.ts:85](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/middleware/isAuth.ts#L85)

***

### trailers

\> **trailers**: `Dict`\<`string`\>

Defined in: node\_modules/@types/node/http.d.ts:1306

The request/response trailers object. Only populated at the `'end'` event.

#### Since

v0.3.0

#### Inherited from

`Request.trailers`

***

### trailersDistinct

\> **trailersDistinct**: `Dict`\<`string`[]\>

Defined in: node\_modules/@types/node/http.d.ts:1313

Similar to `message.trailers`, but there is no join logic and the values are
always arrays of strings, even for headers received just once.
Only populated at the `'end'` event.

#### Since

v18.3.0, v16.17.0

#### Inherited from

`Request.trailersDistinct`

***

### url

\> **url**: `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:668

**Only valid for request obtained from Server.**

Request URL string. This contains only the URL that is present in the actual
HTTP request. Take the following request:

```http
GET /status?name=ryan HTTP/1.1
Accept: text/plain
```

To parse the URL into its parts:

```js
new URL(`http://$\{process.env.HOST ?? 'localhost'\}$\{request.url\}`);
```

When `request.url` is `'/status?name=ryan'` and `process.env.HOST` is undefined:

```console
$ node
\> new URL(`http://$\{process.env.HOST ?? 'localhost'\}$\{request.url\}`);
URL \{
  href: 'http://localhost/status?name=ryan',
  origin: 'http://localhost',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost',
  hostname: 'localhost',
  port: '',
  pathname: '/status',
  search: '?name=ryan',
  searchParams: URLSearchParams \{ 'name' =\> 'ryan' \},
  hash: ''
\}
```

Ensure that you set `process.env.HOST` to the server's host name, or consider replacing this part entirely. If using `req.headers.host`, ensure proper
validation is used, as clients may specify a custom `Host` header.

#### Since

v0.1.90

#### Inherited from

`Request.url`

***

### userId?

\> `optional` **userId**: `string`

Defined in: [src/middleware/isAuth.ts:84](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/middleware/isAuth.ts#L84)

***

### xhr

\> `readonly` **xhr**: `boolean`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:648

Check if the request was an _XMLHttpRequest_.

#### Inherited from

`Request.xhr`

## Methods

### \_\_()

#### Call Signature

\> **\_\_**(`phraseOrOptions`, ...`replace`): `string`

Defined in: node\_modules/@types/i18n/index.d.ts:465

Translate the given phrase using locale configuration

##### Parameters

###### phraseOrOptions

The phrase to translate or options for translation

`string` | `TranslateOptions`

###### replace

...`string`[]

##### Returns

`string`

The translated phrase

##### Inherited from

`Request.__`

#### Call Signature

\> **\_\_**(`phraseOrOptions`, `replacements`): `string`

Defined in: node\_modules/@types/i18n/index.d.ts:472

Translate the given phrase using locale configuration

##### Parameters

###### phraseOrOptions

The phrase to translate or options for translation

`string` | `TranslateOptions`

###### replacements

`Replacements`

An object containing replacements

##### Returns

`string`

The translated phrase

##### Inherited from

`Request.__`

***

### \_\_h()

\> **\_\_h**(`phrase`): `HashedList`[]

Defined in: node\_modules/@types/i18n/index.d.ts:548

Returns a hashed list of translations for a given phrase in each language.

#### Parameters

##### phrase

`string`

The phrase to get translations in each language

#### Returns

`HashedList`[]

The phrase in each language

#### Inherited from

`Request.__h`

***

### \_\_l()

\> **\_\_l**(`phrase`): `string`[]

Defined in: node\_modules/@types/i18n/index.d.ts:537

Returns a list of translations for a given phrase in each language.

#### Parameters

##### phrase

`string`

The phrase to get translations in each language

#### Returns

`string`[]

The phrase in each language

#### Inherited from

`Request.__l`

***

### \_\_mf()

#### Call Signature

\> **\_\_mf**(`phraseOrOptions`, ...`replace`): `string`

Defined in: node\_modules/@types/i18n/index.d.ts:519

Translate the given phrase using locale configuration and MessageFormat

##### Parameters

###### phraseOrOptions

The phrase to translate or options for translation

`string` | `TranslateOptions`

###### replace

...`any`[]

##### Returns

`string`

The translated phrase

##### Inherited from

`Request.__mf`

#### Call Signature

\> **\_\_mf**(`phraseOrOptions`, `replacements`): `string`

Defined in: node\_modules/@types/i18n/index.d.ts:526

Translate the given phrase using locale configuration and MessageFormat

##### Parameters

###### phraseOrOptions

The phrase to translate or options for translation

`string` | `TranslateOptions`

###### replacements

`Replacements`

An object containing replacements

##### Returns

`string`

The translated phrase

##### Inherited from

`Request.__mf`

***

### \_\_n()

#### Call Signature

\> **\_\_n**(`phrase`, `count`): `string`

Defined in: node\_modules/@types/i18n/index.d.ts:484

Translate with plural condition the given phrase and count using locale configuration

##### Parameters

###### phrase

`string`

Short phrase to be translated. All plural options ("one", "few", other", ...) have to be provided by your translation file

###### count

`number`

The number which allow to select from plural to singular

##### Returns

`string`

The translated phrase

##### Inherited from

`Request.__n`

#### Call Signature

\> **\_\_n**(`options`, `count`?): `string`

Defined in: node\_modules/@types/i18n/index.d.ts:492

Translate with plural condition the given phrase and count using locale configuration

##### Parameters

###### options

`PluralOptions`

Options for plural translate

###### count?

`number`

The number which allow to select from plural to singular

##### Returns

`string`

The translated phrase

##### Inherited from

`Request.__n`

#### Call Signature

\> **\_\_n**(`singular`, `plural`, `count`): `string`

Defined in: node\_modules/@types/i18n/index.d.ts:500

Translate with plural condition the given phrase and count using locale configuration

##### Parameters

###### singular

`string`

The singular phrase to translate if count is \<= 1

###### plural

`string`

The plural phrase to translate if count is \> 1

###### count

The number which allow to select from plural to singular

`string` | `number`

##### Returns

`string`

The translated phrase

##### Inherited from

`Request.__n`

#### Call Signature

\> **\_\_n**(`phrase`, `count`, `replacements`): `string`

Defined in: node\_modules/@types/i18n/index.d.ts:508

Translate with plural condition the given phrase and count using locale configuration

##### Parameters

###### phrase

`string`

The phrase to translate or a flattened key path in locale json file

###### count

The number which allow to select from plural to singular

`string` | `number`

###### replacements

`Replacements`

An object containing replacements

##### Returns

`string`

The translated phrase

##### Inherited from

`Request.__n`

***

### \_construct()?

\> `optional` **\_construct**(`callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:133

#### Parameters

##### callback

(`error`?) =\> `void`

#### Returns

`void`

#### Inherited from

`Request._construct`

***

### \_destroy()

\> **\_destroy**(`error`, `callback`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:574

#### Parameters

##### error

`null` | `Error`

##### callback

(`error`?) =\> `void`

#### Returns

`void`

#### Inherited from

`Request._destroy`

***

### \_read()

\> **\_read**(`size`): `void`

Defined in: node\_modules/@types/node/stream.d.ts:134

#### Parameters

##### size

`number`

#### Returns

`void`

#### Inherited from

`Request._read`

***

### \[asyncDispose\]()

\> **\[asyncDispose\]**(): `Promise`\<`void`\>

Defined in: node\_modules/@types/node/stream.d.ts:659

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

#### Returns

`Promise`\<`void`\>

#### Since

v20.4.0

#### Inherited from

`Request.[asyncDispose]`

***

### \[asyncIterator\]()

\> **\[asyncIterator\]**(): `AsyncIterator`

Defined in: node\_modules/@types/node/stream.d.ts:654

#### Returns

`AsyncIterator`

#### Inherited from

`Request.[asyncIterator]`

***

### \[captureRejectionSymbol\]()?

\> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

Defined in: node\_modules/@types/node/events.d.ts:136

#### Type Parameters

• **K**

#### Parameters

##### error

`Error`

##### event

`string` | `symbol`

##### args

...`AnyRest`

#### Returns

`void`

#### Inherited from

`Request.[captureRejectionSymbol]`

***

### accepts()

#### Call Signature

\> **accepts**(): `string`[]

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:467

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `undefined`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json", a comma-delimted list such as "json, html, text/plain",
or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:

    // Accept: text/html
    req.accepts('html');
    // =\> "html"

    // Accept: text/*, application/json
    req.accepts('html');
    // =\> "html"
    req.accepts('text/html');
    // =\> "text/html"
    req.accepts('json, text');
    // =\> "json"
    req.accepts('application/json');
    // =\> "application/json"

    // Accept: text/*, application/json
    req.accepts('image/png');
    req.accepts('png');
    // =\> false

    // Accept: text/*;q=.5, application/json
    req.accepts(['html', 'json']);
    req.accepts('html, json');
    // =\> "json"

##### Returns

`string`[]

##### Inherited from

`Request.accepts`

#### Call Signature

\> **accepts**(`type`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:468

##### Parameters

###### type

`string`

##### Returns

`string` \| `false`

##### Inherited from

`Request.accepts`

#### Call Signature

\> **accepts**(`type`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:469

##### Parameters

###### type

`string`[]

##### Returns

`string` \| `false`

##### Inherited from

`Request.accepts`

#### Call Signature

\> **accepts**(...`type`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:470

##### Parameters

###### type

...`string`[]

##### Returns

`string` \| `false`

##### Inherited from

`Request.accepts`

***

### acceptsCharsets()

#### Call Signature

\> **acceptsCharsets**(): `string`[]

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:479

Returns the first accepted charset of the specified character sets,
based on the request's Accept-Charset HTTP header field.
If none of the specified charsets is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

##### Returns

`string`[]

##### Inherited from

`Request.acceptsCharsets`

#### Call Signature

\> **acceptsCharsets**(`charset`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:480

##### Parameters

###### charset

`string`

##### Returns

`string` \| `false`

##### Inherited from

`Request.acceptsCharsets`

#### Call Signature

\> **acceptsCharsets**(`charset`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:481

##### Parameters

###### charset

`string`[]

##### Returns

`string` \| `false`

##### Inherited from

`Request.acceptsCharsets`

#### Call Signature

\> **acceptsCharsets**(...`charset`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:482

##### Parameters

###### charset

...`string`[]

##### Returns

`string` \| `false`

##### Inherited from

`Request.acceptsCharsets`

***

### acceptsEncodings()

#### Call Signature

\> **acceptsEncodings**(): `string`[]

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:491

Returns the first accepted encoding of the specified encodings,
based on the request's Accept-Encoding HTTP header field.
If none of the specified encodings is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

##### Returns

`string`[]

##### Inherited from

`Request.acceptsEncodings`

#### Call Signature

\> **acceptsEncodings**(`encoding`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:492

##### Parameters

###### encoding

`string`

##### Returns

`string` \| `false`

##### Inherited from

`Request.acceptsEncodings`

#### Call Signature

\> **acceptsEncodings**(`encoding`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:493

##### Parameters

###### encoding

`string`[]

##### Returns

`string` \| `false`

##### Inherited from

`Request.acceptsEncodings`

#### Call Signature

\> **acceptsEncodings**(...`encoding`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:494

##### Parameters

###### encoding

...`string`[]

##### Returns

`string` \| `false`

##### Inherited from

`Request.acceptsEncodings`

***

### acceptsLanguages()

#### Call Signature

\> **acceptsLanguages**(): `string`[]

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:503

Returns the first accepted language of the specified languages,
based on the request's Accept-Language HTTP header field.
If none of the specified languages is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

##### Returns

`string`[]

##### Inherited from

`Request.acceptsLanguages`

#### Call Signature

\> **acceptsLanguages**(`lang`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:504

##### Parameters

###### lang

`string`

##### Returns

`string` \| `false`

##### Inherited from

`Request.acceptsLanguages`

#### Call Signature

\> **acceptsLanguages**(`lang`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:505

##### Parameters

###### lang

`string`[]

##### Returns

`string` \| `false`

##### Inherited from

`Request.acceptsLanguages`

#### Call Signature

\> **acceptsLanguages**(...`lang`): `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:506

##### Parameters

###### lang

...`string`[]

##### Returns

`string` \| `false`

##### Inherited from

`Request.acceptsLanguages`

***

### addListener()

#### Call Signature

\> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:598

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"close"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.addListener`

#### Call Signature

\> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:599

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.addListener`

#### Call Signature

\> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:600

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"end"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.addListener`

#### Call Signature

\> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:601

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"error"`

###### listener

(`err`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.addListener`

#### Call Signature

\> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:602

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"pause"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.addListener`

#### Call Signature

\> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:603

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"readable"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.addListener`

#### Call Signature

\> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:604

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`"resume"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.addListener`

#### Call Signature

\> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:605

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.addListener`

***

### asIndexedPairs()

\> **asIndexedPairs**(`options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:549

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

#### Parameters

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream of indexed pairs.

#### Since

v17.5.0

#### Inherited from

`Request.asIndexedPairs`

***

### compose()

\> **compose**\<`T`\>(`stream`, `options`?): `T`

Defined in: node\_modules/@types/node/stream.d.ts:36

#### Type Parameters

• **T** *extends* `ReadableStream`

#### Parameters

##### stream

`ComposeFnParam` | `T` | `Iterable`\<`T`\> | `AsyncIterable`\<`T`\>

##### options?

###### signal

`AbortSignal`

#### Returns

`T`

#### Inherited from

`Request.compose`

***

### destroy()

\> **destroy**(`error`?): `this`

Defined in: node\_modules/@types/node/http.d.ts:1394

Calls `destroy()` on the socket that received the `IncomingMessage`. If `error` is provided, an `'error'` event is emitted on the socket and `error` is passed
as an argument to any listeners on the event.

#### Parameters

##### error?

`Error`

#### Returns

`this`

#### Since

v0.3.0

#### Inherited from

`Request.destroy`

***

### drop()

\> **drop**(`limit`, `options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:535

This method returns a new stream with the first *limit* chunks dropped from the start.

#### Parameters

##### limit

`number`

the number of chunks to drop from the readable.

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream with *limit* chunks dropped from the start.

#### Since

v17.5.0

#### Inherited from

`Request.drop`

***

### emit()

#### Call Signature

\> **emit**(`event`): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:606

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import \{ EventEmitter \} from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() \{
  console.log('Helloooo! first listener');
\});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) \{
  console.log(`event with parameters $\{arg1\}, $\{arg2\} in second listener`);
\});
// Third listener
myEmitter.on('event', function thirdListener(...args) \{
  const parameters = args.join(', ');
  console.log(`event with parameters $\{parameters\} in third listener`);
\});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Parameters

###### event

`"close"`

##### Returns

`boolean`

##### Since

v0.1.26

##### Inherited from

`Request.emit`

#### Call Signature

\> **emit**(`event`, `chunk`): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:607

##### Parameters

###### event

`"data"`

###### chunk

`any`

##### Returns

`boolean`

##### Inherited from

`Request.emit`

#### Call Signature

\> **emit**(`event`): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:608

##### Parameters

###### event

`"end"`

##### Returns

`boolean`

##### Inherited from

`Request.emit`

#### Call Signature

\> **emit**(`event`, `err`): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:609

##### Parameters

###### event

`"error"`

###### err

`Error`

##### Returns

`boolean`

##### Inherited from

`Request.emit`

#### Call Signature

\> **emit**(`event`): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:610

##### Parameters

###### event

`"pause"`

##### Returns

`boolean`

##### Inherited from

`Request.emit`

#### Call Signature

\> **emit**(`event`): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:611

##### Parameters

###### event

`"readable"`

##### Returns

`boolean`

##### Inherited from

`Request.emit`

#### Call Signature

\> **emit**(`event`): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:612

##### Parameters

###### event

`"resume"`

##### Returns

`boolean`

##### Inherited from

`Request.emit`

#### Call Signature

\> **emit**(`event`, ...`args`): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:613

##### Parameters

###### event

`string` | `symbol`

###### args

...`any`[]

##### Returns

`boolean`

##### Inherited from

`Request.emit`

***

### eventNames()

\> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import \{ EventEmitter \} from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () =\> \{\});
myEE.on('bar', () =\> \{\});

const sym = Symbol('symbol');
myEE.on(sym, () =\> \{\});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Inherited from

`Request.eventNames`

***

### every()

\> **every**(`fn`, `options`?): `Promise`\<`boolean`\>

Defined in: node\_modules/@types/node/stream.d.ts:514

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

#### Parameters

##### fn

(`data`, `options`?) =\> `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

#### Since

v17.5.0

#### Inherited from

`Request.every`

***

### filter()

\> **filter**(`fn`, `options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:442

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

#### Parameters

##### fn

(`data`, `options`?) =\> `boolean` \| `Promise`\<`boolean`\>

a function to filter chunks from the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Readable`

a stream filtered with the predicate *fn*.

#### Since

v17.4.0, v16.14.0

#### Inherited from

`Request.filter`

***

### find()

#### Call Signature

\> **find**\<`T`\>(`fn`, `options`?): `Promise`\<`undefined` \| `T`\>

Defined in: node\_modules/@types/node/stream.d.ts:497

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Type Parameters

• **T**

##### Parameters

###### fn

(`data`, `options`?) =\> `data is T`

a function to call on each chunk of the stream. Async or not.

###### options?

`ArrayOptions`

##### Returns

`Promise`\<`undefined` \| `T`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### Since

v17.5.0

##### Inherited from

`Request.find`

#### Call Signature

\> **find**(`fn`, `options`?): `Promise`\<`any`\>

Defined in: node\_modules/@types/node/stream.d.ts:501

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Parameters

###### fn

(`data`, `options`?) =\> `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

###### options?

`ArrayOptions`

##### Returns

`Promise`\<`any`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### Since

v17.5.0

##### Inherited from

`Request.find`

***

### flatMap()

\> **flatMap**(`fn`, `options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:528

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

#### Parameters

##### fn

(`data`, `options`?) =\> `any`

a function to map over every chunk in the stream. May be async. May be a stream or generator.

##### options?

`ArrayOptions`

#### Returns

`Readable`

a stream flat-mapped with the function *fn*.

#### Since

v17.5.0

#### Inherited from

`Request.flatMap`

***

### forEach()

\> **forEach**(`fn`, `options`?): `Promise`\<`void`\>

Defined in: node\_modules/@types/node/stream.d.ts:461

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

#### Parameters

##### fn

(`data`, `options`?) =\> `void` \| `Promise`\<`void`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Promise`\<`void`\>

a promise for when the stream has finished.

#### Since

v17.5.0

#### Inherited from

`Request.forEach`

***

### get()

#### Call Signature

\> **get**(`name`): `undefined` \| `string`[]

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:424

Return request header.

The `Referrer` header field is special-cased,
both `Referrer` and `Referer` are interchangeable.

Examples:

    req.get('Content-Type');
    // =\> "text/plain"

    req.get('content-type');
    // =\> "text/plain"

    req.get('Something');
    // =\> undefined

Aliased as `req.header()`.

##### Parameters

###### name

`"set-cookie"`

##### Returns

`undefined` \| `string`[]

##### Inherited from

`Request.get`

#### Call Signature

\> **get**(`name`): `undefined` \| `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:425

##### Parameters

###### name

`string`

##### Returns

`undefined` \| `string`

##### Inherited from

`Request.get`

***

### getCatalog()

#### Call Signature

\> **getCatalog**(): `GlobalCatalog`

Defined in: node\_modules/@types/i18n/index.d.ts:568

Get the current global catalog

##### Returns

`GlobalCatalog`

The current global catalog

##### Inherited from

`Request.getCatalog`

#### Call Signature

\> **getCatalog**(`locale`?): `LocaleCatalog`

Defined in: node\_modules/@types/i18n/index.d.ts:574

Get the catalog for the given locale

##### Parameters

###### locale?

`string`

The locale to get catalog for

##### Returns

`LocaleCatalog`

The specified locale catalog

##### Inherited from

`Request.getCatalog`

***

### getLocale()

\> **getLocale**(): `string`

Defined in: node\_modules/@types/i18n/index.d.ts:556

Get the current active locale

#### Returns

`string`

The current locale in request

#### Inherited from

`Request.getLocale`

***

### getMaxListeners()

\> **getMaxListeners**(): `number`

Defined in: node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

`Request.getMaxListeners`

***

### header()

#### Call Signature

\> **header**(`name`): `undefined` \| `string`[]

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:427

##### Parameters

###### name

`"set-cookie"`

##### Returns

`undefined` \| `string`[]

##### Inherited from

`Request.header`

#### Call Signature

\> **header**(`name`): `undefined` \| `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:428

##### Parameters

###### name

`string`

##### Returns

`undefined` \| `string`

##### Inherited from

`Request.header`

***

### is()

\> **is**(`type`): `null` \| `string` \| `false`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:564

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:

     // With Content-Type: text/html; charset=utf-8
     req.is('html');
     req.is('text/html');
     req.is('text/*');
     // =\> true

     // When Content-Type is application/json
     req.is('json');
     req.is('application/json');
     req.is('application/*');
     // =\> true

     req.is('html');
     // =\> false

#### Parameters

##### type

`string` | `string`[]

#### Returns

`null` \| `string` \| `false`

#### Inherited from

`Request.is`

***

### isPaused()

\> **isPaused**(): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:295

The `readable.isPaused()` method returns the current operating state of the `Readable`.
This is used primarily by the mechanism that underlies the `readable.pipe()` method.
In most typical cases, there will be no reason to use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

#### Since

v0.11.14

#### Inherited from

`Request.isPaused`

***

### iterator()

\> **iterator**(`options`?): `AsyncIterator`

Defined in: node\_modules/@types/node/stream.d.ts:425

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

#### Parameters

##### options?

###### destroyOnReturn

`boolean`

When set to `false`, calling `return` on the async iterator,
or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream.
**Default: `true`**.

#### Returns

`AsyncIterator`

#### Since

v16.3.0

#### Inherited from

`Request.iterator`

***

### listenerCount()

\> **listenerCount**\<`K`\>(`eventName`, `listener`?): `number`

Defined in: node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type Parameters

• **K**

#### Parameters

##### eventName

The name of the event being listened for

`string` | `symbol`

##### listener?

`Function`

The event handler function

#### Returns

`number`

#### Since

v3.2.0

#### Inherited from

`Request.listenerCount`

***

### listeners()

\> **listeners**\<`K`\>(`eventName`): `Function`[]

Defined in: node\_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) =\> \{
  console.log('someone connected!');
\});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

• **K**

#### Parameters

##### eventName

`string` | `symbol`

#### Returns

`Function`[]

#### Since

v0.1.26

#### Inherited from

`Request.listeners`

***

### map()

\> **map**(`fn`, `options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:433

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

#### Parameters

##### fn

(`data`, `options`?) =\> `any`

a function to map over every chunk in the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Readable`

a stream mapped with the function *fn*.

#### Since

v17.4.0, v16.14.0

#### Inherited from

`Request.map`

***

### off()

\> **off**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

#### Type Parameters

• **K**

#### Parameters

##### eventName

`string` | `symbol`

##### listener

(...`args`) =\> `void`

#### Returns

`this`

#### Since

v10.0.0

#### Inherited from

`Request.off`

***

### on()

#### Call Signature

\> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:614

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) =\> \{
  console.log('someone connected!');
\});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import \{ EventEmitter \} from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () =\> console.log('a'));
myEE.prependListener('foo', () =\> console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

###### event

`"close"`

###### listener

() =\> `void`

The callback function

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`Request.on`

#### Call Signature

\> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:615

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.on`

#### Call Signature

\> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:616

##### Parameters

###### event

`"end"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.on`

#### Call Signature

\> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:617

##### Parameters

###### event

`"error"`

###### listener

(`err`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.on`

#### Call Signature

\> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:618

##### Parameters

###### event

`"pause"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.on`

#### Call Signature

\> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:619

##### Parameters

###### event

`"readable"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.on`

#### Call Signature

\> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:620

##### Parameters

###### event

`"resume"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.on`

#### Call Signature

\> **on**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:621

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.on`

***

### once()

#### Call Signature

\> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:622

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) =\> \{
  console.log('Ah, we have our first user!');
\});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import \{ EventEmitter \} from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () =\> console.log('a'));
myEE.prependOnceListener('foo', () =\> console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

###### event

`"close"`

###### listener

() =\> `void`

The callback function

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`Request.once`

#### Call Signature

\> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:623

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.once`

#### Call Signature

\> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:624

##### Parameters

###### event

`"end"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.once`

#### Call Signature

\> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:625

##### Parameters

###### event

`"error"`

###### listener

(`err`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.once`

#### Call Signature

\> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:626

##### Parameters

###### event

`"pause"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.once`

#### Call Signature

\> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:627

##### Parameters

###### event

`"readable"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.once`

#### Call Signature

\> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:628

##### Parameters

###### event

`"resume"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.once`

#### Call Signature

\> **once**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:629

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.once`

***

### ~~param()~~

\> **param**(`name`, `defaultValue`?): `string`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:541

#### Parameters

##### name

`string`

##### defaultValue?

`any`

#### Returns

`string`

#### Deprecated

since 4.11 Use either req.params, req.body or req.query, as applicable.

Return the value of param `name` when present or `defaultValue`.

 - Checks route placeholders, ex: _/user/:id_
 - Checks body params, ex: id=12, \{"id":12\}
 - Checks query string params, ex: ?id=12

To utilize request bodies, `req.body`
should be an object. This can be done by using
the `connect.bodyParser()` middleware.

#### Inherited from

`Request.param`

***

### pause()

\> **pause**(): `this`

Defined in: node\_modules/@types/node/stream.d.ts:259

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) =\> \{
  console.log(`Received $\{chunk.length\} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() =\> \{
    console.log('Now data will start flowing again.');
    readable.resume();
  \}, 1000);
\});
```

The `readable.pause()` method has no effect if there is a `'readable'` event listener.

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`Request.pause`

***

### pipe()

\> **pipe**\<`T`\>(`destination`, `options`?): `T`

Defined in: node\_modules/@types/node/stream.d.ts:30

#### Type Parameters

• **T** *extends* `WritableStream`

#### Parameters

##### destination

`T`

##### options?

###### end

`boolean`

#### Returns

`T`

#### Inherited from

`Request.pipe`

***

### prependListener()

#### Call Signature

\> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:630

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) =\> \{
  console.log('someone connected!');
\});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() =\> `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

`Request.prependListener`

#### Call Signature

\> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:631

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependListener`

#### Call Signature

\> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:632

##### Parameters

###### event

`"end"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependListener`

#### Call Signature

\> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:633

##### Parameters

###### event

`"error"`

###### listener

(`err`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependListener`

#### Call Signature

\> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:634

##### Parameters

###### event

`"pause"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependListener`

#### Call Signature

\> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:635

##### Parameters

###### event

`"readable"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependListener`

#### Call Signature

\> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:636

##### Parameters

###### event

`"resume"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependListener`

#### Call Signature

\> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:637

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependListener`

***

### prependOnceListener()

#### Call Signature

\> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:638

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) =\> \{
  console.log('Ah, we have our first user!');
\});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() =\> `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

`Request.prependOnceListener`

#### Call Signature

\> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:639

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependOnceListener`

#### Call Signature

\> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:640

##### Parameters

###### event

`"end"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependOnceListener`

#### Call Signature

\> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:641

##### Parameters

###### event

`"error"`

###### listener

(`err`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependOnceListener`

#### Call Signature

\> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:642

##### Parameters

###### event

`"pause"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependOnceListener`

#### Call Signature

\> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:643

##### Parameters

###### event

`"readable"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependOnceListener`

#### Call Signature

\> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:644

##### Parameters

###### event

`"resume"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependOnceListener`

#### Call Signature

\> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:645

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.prependOnceListener`

***

### push()

\> **push**(`chunk`, `encoding`?): `boolean`

Defined in: node\_modules/@types/node/stream.d.ts:415

#### Parameters

##### chunk

`any`

##### encoding?

`BufferEncoding`

#### Returns

`boolean`

#### Inherited from

`Request.push`

***

### range()

\> **range**(`size`, `options`?): `undefined` \| `Ranges` \| `Result`

Defined in: node\_modules/@types/express-serve-static-core/index.d.ts:520

Parse Range header field, capping to the given `size`.

Unspecified ranges such as "0-" require knowledge of your resource length. In
the case of a byte range this is of course the total number of bytes.
If the Range header field is not given `undefined` is returned.
If the Range header field is given, return value is a result of range-parser.
See more ./types/range-parser/index.d.ts

NOTE: remember that ranges are inclusive, so for example "Range: users=0-3"
should respond with 4 users when available, not 3.

#### Parameters

##### size

`number`

##### options?

`Options`

#### Returns

`undefined` \| `Ranges` \| `Result`

#### Inherited from

`Request.range`

***

### rawListeners()

\> **rawListeners**\<`K`\>(`eventName`): `Function`[]

Defined in: node\_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import \{ EventEmitter \} from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () =\> console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () =\> console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type Parameters

• **K**

#### Parameters

##### eventName

`string` | `symbol`

#### Returns

`Function`[]

#### Since

v9.4.0

#### Inherited from

`Request.rawListeners`

***

### read()

\> **read**(`size`?): `any`

Defined in: node\_modules/@types/node/stream.d.ts:212

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () =\> \{
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) \{
    console.log(`Read $\{chunk.length\} bytes of data...`);
  \}
\});

// 'end' will be triggered once when there is no more data available
readable.on('end', () =\> \{
  console.log('Reached end of stream.');
\});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () =\> \{
  let chunk;
  while (null !== (chunk = readable.read())) \{
    chunks.push(chunk);
  \}
\});

readable.on('end', () =\> \{
  const content = chunks.join('');
\});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](InterfaceAuthenticatedRequest.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

##### size?

`number`

Optional argument to specify how much data to read.

#### Returns

`any`

#### Since

v0.9.4

#### Inherited from

`Request.read`

***

### reduce()

#### Call Signature

\> **reduce**\<`T`\>(`fn`, `initial`?, `options`?): `Promise`\<`T`\>

Defined in: node\_modules/@types/node/stream.d.ts:564

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type Parameters

• **T** = `any`

##### Parameters

###### fn

(`previous`, `data`, `options`?) =\> `T`

a reducer function to call over every chunk in the stream. Async or not.

###### initial?

`undefined`

the initial value to use in the reduction.

###### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

##### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### Since

v17.5.0

##### Inherited from

`Request.reduce`

#### Call Signature

\> **reduce**\<`T`\>(`fn`, `initial`, `options`?): `Promise`\<`T`\>

Defined in: node\_modules/@types/node/stream.d.ts:569

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type Parameters

• **T** = `any`

##### Parameters

###### fn

(`previous`, `data`, `options`?) =\> `T`

a reducer function to call over every chunk in the stream. Async or not.

###### initial

`T`

the initial value to use in the reduction.

###### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

##### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### Since

v17.5.0

##### Inherited from

`Request.reduce`

***

### removeAllListeners()

\> **removeAllListeners**(`eventName`?): `this`

Defined in: node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

##### eventName?

`string` | `symbol`

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

`Request.removeAllListeners`

***

### removeListener()

#### Call Signature

\> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:646

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) =\> \{
  console.log('someone connected!');
\};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import \{ EventEmitter \} from 'node:events';
class MyEmitter extends EventEmitter \{\}
const myEmitter = new MyEmitter();

const callbackA = () =\> \{
  console.log('A');
  myEmitter.removeListener('event', callbackB);
\};

const callbackB = () =\> \{
  console.log('B');
\};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import \{ EventEmitter \} from 'node:events';
const ee = new EventEmitter();

function pong() \{
  console.log('pong');
\}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() =\> `void`

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

`Request.removeListener`

#### Call Signature

\> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:647

##### Parameters

###### event

`"data"`

###### listener

(`chunk`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.removeListener`

#### Call Signature

\> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:648

##### Parameters

###### event

`"end"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.removeListener`

#### Call Signature

\> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:649

##### Parameters

###### event

`"error"`

###### listener

(`err`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.removeListener`

#### Call Signature

\> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:650

##### Parameters

###### event

`"pause"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.removeListener`

#### Call Signature

\> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:651

##### Parameters

###### event

`"readable"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.removeListener`

#### Call Signature

\> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:652

##### Parameters

###### event

`"resume"`

###### listener

() =\> `void`

##### Returns

`this`

##### Inherited from

`Request.removeListener`

#### Call Signature

\> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:653

##### Parameters

###### event

`string` | `symbol`

###### listener

(...`args`) =\> `void`

##### Returns

`this`

##### Inherited from

`Request.removeListener`

***

### resume()

\> **resume**(): `this`

Defined in: node\_modules/@types/node/stream.d.ts:278

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () =\> \{
    console.log('Reached the end, but did not read anything.');
  \});
```

The `readable.resume()` method has no effect if there is a `'readable'` event listener.

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`Request.resume`

***

### setEncoding()

\> **setEncoding**(`encoding`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:237

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as `Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer` objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling `readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) =\> \{
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
\});
```

#### Parameters

##### encoding

`BufferEncoding`

The encoding to use.

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`Request.setEncoding`

***

### setLocale()

\> **setLocale**(`locale`): `void`

Defined in: node\_modules/@types/i18n/index.d.ts:562

Change the current active locale

#### Parameters

##### locale

`string`

The locale to set as default

#### Returns

`void`

#### Inherited from

`Request.setLocale`

***

### setMaxListeners()

\> **setMaxListeners**(`n`): `this`

Defined in: node\_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

##### n

`number`

#### Returns

`this`

#### Since

v0.3.5

#### Inherited from

`Request.setMaxListeners`

***

### setTimeout()

\> **setTimeout**(`msecs`, `callback`?): `this`

Defined in: node\_modules/@types/node/http.d.ts:1324

Calls `message.socket.setTimeout(msecs, callback)`.

#### Parameters

##### msecs

`number`

##### callback?

() =\> `void`

#### Returns

`this`

#### Since

v0.5.9

#### Inherited from

`Request.setTimeout`

***

### some()

\> **some**(`fn`, `options`?): `Promise`\<`boolean`\>

Defined in: node\_modules/@types/node/stream.d.ts:483

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

#### Parameters

##### fn

(`data`, `options`?) =\> `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

#### Since

v17.5.0

#### Inherited from

`Request.some`

***

### take()

\> **take**(`limit`, `options`?): `Readable`

Defined in: node\_modules/@types/node/stream.d.ts:542

This method returns a new stream with the first *limit* chunks.

#### Parameters

##### limit

`number`

the number of chunks to take from the readable.

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream with *limit* chunks taken.

#### Since

v17.5.0

#### Inherited from

`Request.take`

***

### toArray()

\> **toArray**(`options`?): `Promise`\<`any`[]\>

Defined in: node\_modules/@types/node/stream.d.ts:473

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

#### Parameters

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Promise`\<`any`[]\>

a promise containing an array with the contents of the stream.

#### Since

v17.5.0

#### Inherited from

`Request.toArray`

***

### unpipe()

\> **unpipe**(`destination`?): `this`

Defined in: node\_modules/@types/node/stream.d.ts:322

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](InterfaceAuthenticatedRequest.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
import fs from 'node:fs';
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() =\> \{
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
\}, 1000);
```

#### Parameters

##### destination?

`WritableStream`

Optional specific stream to unpipe

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`Request.unpipe`

***

### unshift()

\> **unshift**(`chunk`, `encoding`?): `void`

Defined in: node\_modules/@types/node/stream.d.ts:388

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
import \{ StringDecoder \} from 'node:string_decoder';
function parseHeader(stream, callback) \{
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() \{
    let chunk;
    while (null !== (chunk = stream.read())) \{
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) \{
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      \}
      // Still reading the header.
      header += str;
    \}
  \}
\}
```

Unlike [push](InterfaceAuthenticatedRequest.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [\_read](InterfaceAuthenticatedRequest.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](InterfaceAuthenticatedRequest.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

##### chunk

`any`

Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must
be a \{string\}, \{Buffer\}, \{TypedArray\}, \{DataView\} or `null`. For object mode streams, `chunk` may be any JavaScript value.

##### encoding?

`BufferEncoding`

Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`.

#### Returns

`void`

#### Since

v0.9.11

#### Inherited from

`Request.unshift`

***

### wrap()

\> **wrap**(`stream`): `this`

Defined in: node\_modules/@types/node/stream.d.ts:414

Prior to Node.js 0.10, streams did not implement the entire `node:stream` module API as it is currently defined. (See `Compatibility` for more
information.)

When using an older Node.js library that emits `'data'` events and has a [pause](InterfaceAuthenticatedRequest.md#pause) method that is advisory only, the `readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
import \{ OldReader \} from './old-api-module.js';
import \{ Readable \} from 'node:stream';
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () =\> \{
  myReader.read(); // etc.
\});
```

#### Parameters

##### stream

`ReadableStream`

An "old style" readable stream

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`Request.wrap`
