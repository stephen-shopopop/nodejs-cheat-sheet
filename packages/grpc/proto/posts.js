/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */
'use strict'

var $protobuf = require('protobufjs/minimal')

// Common aliases
var $Reader = $protobuf.Reader; var $Writer = $protobuf.Writer; var $util = $protobuf.util

// Exported root namespace
var $root = $protobuf.roots.default || ($protobuf.roots.default = {})

$root.Posts = (function () {
  /**
     * Properties of a Posts.
     * @exports IPosts
     * @interface IPosts
     * @property {string|null} [id] Posts id
     * @property {string|null} [title] Posts title
     * @property {string|null} [body] Posts body
     * @property {string|null} [category] Posts category
     */

  /**
     * Constructs a new Posts.
     * @exports Posts
     * @classdesc Represents a Posts.
     * @implements IPosts
     * @constructor
     * @param {IPosts=} [properties] Properties to set
     */
  function Posts (properties) {
    if (properties) {
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * Posts id.
     * @member {string} id
     * @memberof Posts
     * @instance
     */
  Posts.prototype.id = ''

  /**
     * Posts title.
     * @member {string} title
     * @memberof Posts
     * @instance
     */
  Posts.prototype.title = ''

  /**
     * Posts body.
     * @member {string} body
     * @memberof Posts
     * @instance
     */
  Posts.prototype.body = ''

  /**
     * Posts category.
     * @member {string} category
     * @memberof Posts
     * @instance
     */
  Posts.prototype.category = ''

  /**
     * Creates a new Posts instance using the specified properties.
     * @function create
     * @memberof Posts
     * @static
     * @param {IPosts=} [properties] Properties to set
     * @returns {Posts} Posts instance
     */
  Posts.create = function create (properties) {
    return new Posts(properties)
  }

  /**
     * Encodes the specified Posts message. Does not implicitly {@link Posts.verify|verify} messages.
     * @function encode
     * @memberof Posts
     * @static
     * @param {IPosts} message Posts message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Posts.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.id) }
    if (message.title != null && Object.hasOwnProperty.call(message, 'title')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.title) }
    if (message.body != null && Object.hasOwnProperty.call(message, 'body')) { writer.uint32(/* id 3, wireType 2 = */26).string(message.body) }
    if (message.category != null && Object.hasOwnProperty.call(message, 'category')) { writer.uint32(/* id 4, wireType 2 = */34).string(message.category) }
    return writer
  }

  /**
     * Encodes the specified Posts message, length delimited. Does not implicitly {@link Posts.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Posts
     * @static
     * @param {IPosts} message Posts message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Posts.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a Posts message from the specified reader or buffer.
     * @function decode
     * @memberof Posts
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Posts} Posts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Posts.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.Posts()
    while (reader.pos < end) {
      var tag = reader.uint32()
      switch (tag >>> 3) {
        case 1: {
          message.id = reader.string()
          break
        }
        case 2: {
          message.title = reader.string()
          break
        }
        case 3: {
          message.body = reader.string()
          break
        }
        case 4: {
          message.category = reader.string()
          break
        }
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  }

  /**
     * Decodes a Posts message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Posts
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Posts} Posts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Posts.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a Posts message.
     * @function verify
     * @memberof Posts
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  Posts.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (message.id != null && message.hasOwnProperty('id')) {
      if (!$util.isString(message.id)) { return 'id: string expected' }
    }
    if (message.title != null && message.hasOwnProperty('title')) {
      if (!$util.isString(message.title)) { return 'title: string expected' }
    }
    if (message.body != null && message.hasOwnProperty('body')) {
      if (!$util.isString(message.body)) { return 'body: string expected' }
    }
    if (message.category != null && message.hasOwnProperty('category')) {
      if (!$util.isString(message.category)) { return 'category: string expected' }
    }
    return null
  }

  /**
     * Creates a Posts message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Posts
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Posts} Posts
     */
  Posts.fromObject = function fromObject (object) {
    if (object instanceof $root.Posts) { return object }
    var message = new $root.Posts()
    if (object.id != null) { message.id = String(object.id) }
    if (object.title != null) { message.title = String(object.title) }
    if (object.body != null) { message.body = String(object.body) }
    if (object.category != null) { message.category = String(object.category) }
    return message
  }

  /**
     * Creates a plain object from a Posts message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Posts
     * @static
     * @param {Posts} message Posts
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  Posts.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    var object = {}
    if (options.defaults) {
      object.id = ''
      object.title = ''
      object.body = ''
      object.category = ''
    }
    if (message.id != null && message.hasOwnProperty('id')) { object.id = message.id }
    if (message.title != null && message.hasOwnProperty('title')) { object.title = message.title }
    if (message.body != null && message.hasOwnProperty('body')) { object.body = message.body }
    if (message.category != null && message.hasOwnProperty('category')) { object.category = message.category }
    return object
  }

  /**
     * Converts this Posts to JSON.
     * @function toJSON
     * @memberof Posts
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  Posts.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  /**
     * Gets the default type url for Posts
     * @function getTypeUrl
     * @memberof Posts
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
  Posts.getTypeUrl = function getTypeUrl (typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com'
    }
    return typeUrlPrefix + '/Posts'
  }

  return Posts
})()

$root.PostsId = (function () {
  /**
     * Properties of a PostsId.
     * @exports IPostsId
     * @interface IPostsId
     * @property {string|null} [id] PostsId id
     */

  /**
     * Constructs a new PostsId.
     * @exports PostsId
     * @classdesc Represents a PostsId.
     * @implements IPostsId
     * @constructor
     * @param {IPostsId=} [properties] Properties to set
     */
  function PostsId (properties) {
    if (properties) {
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * PostsId id.
     * @member {string} id
     * @memberof PostsId
     * @instance
     */
  PostsId.prototype.id = ''

  /**
     * Creates a new PostsId instance using the specified properties.
     * @function create
     * @memberof PostsId
     * @static
     * @param {IPostsId=} [properties] Properties to set
     * @returns {PostsId} PostsId instance
     */
  PostsId.create = function create (properties) {
    return new PostsId(properties)
  }

  /**
     * Encodes the specified PostsId message. Does not implicitly {@link PostsId.verify|verify} messages.
     * @function encode
     * @memberof PostsId
     * @static
     * @param {IPostsId} message PostsId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  PostsId.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.id) }
    return writer
  }

  /**
     * Encodes the specified PostsId message, length delimited. Does not implicitly {@link PostsId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PostsId
     * @static
     * @param {IPostsId} message PostsId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  PostsId.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a PostsId message from the specified reader or buffer.
     * @function decode
     * @memberof PostsId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PostsId} PostsId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  PostsId.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.PostsId()
    while (reader.pos < end) {
      var tag = reader.uint32()
      switch (tag >>> 3) {
        case 1: {
          message.id = reader.string()
          break
        }
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  }

  /**
     * Decodes a PostsId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PostsId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PostsId} PostsId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  PostsId.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a PostsId message.
     * @function verify
     * @memberof PostsId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  PostsId.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (message.id != null && message.hasOwnProperty('id')) {
      if (!$util.isString(message.id)) { return 'id: string expected' }
    }
    return null
  }

  /**
     * Creates a PostsId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PostsId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PostsId} PostsId
     */
  PostsId.fromObject = function fromObject (object) {
    if (object instanceof $root.PostsId) { return object }
    var message = new $root.PostsId()
    if (object.id != null) { message.id = String(object.id) }
    return message
  }

  /**
     * Creates a plain object from a PostsId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PostsId
     * @static
     * @param {PostsId} message PostsId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  PostsId.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    var object = {}
    if (options.defaults) { object.id = '' }
    if (message.id != null && message.hasOwnProperty('id')) { object.id = message.id }
    return object
  }

  /**
     * Converts this PostsId to JSON.
     * @function toJSON
     * @memberof PostsId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  PostsId.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  /**
     * Gets the default type url for PostsId
     * @function getTypeUrl
     * @memberof PostsId
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
  PostsId.getTypeUrl = function getTypeUrl (typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com'
    }
    return typeUrlPrefix + '/PostsId'
  }

  return PostsId
})()

$root.PostsList = (function () {
  /**
     * Properties of a PostsList.
     * @exports IPostsList
     * @interface IPostsList
     * @property {Array.<IPosts>|null} [posts] PostsList posts
     */

  /**
     * Constructs a new PostsList.
     * @exports PostsList
     * @classdesc Represents a PostsList.
     * @implements IPostsList
     * @constructor
     * @param {IPostsList=} [properties] Properties to set
     */
  function PostsList (properties) {
    this.posts = []
    if (properties) {
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * PostsList posts.
     * @member {Array.<IPosts>} posts
     * @memberof PostsList
     * @instance
     */
  PostsList.prototype.posts = $util.emptyArray

  /**
     * Creates a new PostsList instance using the specified properties.
     * @function create
     * @memberof PostsList
     * @static
     * @param {IPostsList=} [properties] Properties to set
     * @returns {PostsList} PostsList instance
     */
  PostsList.create = function create (properties) {
    return new PostsList(properties)
  }

  /**
     * Encodes the specified PostsList message. Does not implicitly {@link PostsList.verify|verify} messages.
     * @function encode
     * @memberof PostsList
     * @static
     * @param {IPostsList} message PostsList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  PostsList.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    if (message.posts != null && message.posts.length) {
      for (var i = 0; i < message.posts.length; ++i) { $root.Posts.encode(message.posts[i], writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
    }
    return writer
  }

  /**
     * Encodes the specified PostsList message, length delimited. Does not implicitly {@link PostsList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PostsList
     * @static
     * @param {IPostsList} message PostsList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  PostsList.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes a PostsList message from the specified reader or buffer.
     * @function decode
     * @memberof PostsList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PostsList} PostsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  PostsList.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.PostsList()
    while (reader.pos < end) {
      var tag = reader.uint32()
      switch (tag >>> 3) {
        case 1: {
          if (!(message.posts && message.posts.length)) { message.posts = [] }
          message.posts.push($root.Posts.decode(reader, reader.uint32()))
          break
        }
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  }

  /**
     * Decodes a PostsList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PostsList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PostsList} PostsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  PostsList.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies a PostsList message.
     * @function verify
     * @memberof PostsList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  PostsList.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    if (message.posts != null && message.hasOwnProperty('posts')) {
      if (!Array.isArray(message.posts)) { return 'posts: array expected' }
      for (var i = 0; i < message.posts.length; ++i) {
        var error = $root.Posts.verify(message.posts[i])
        if (error) { return 'posts.' + error }
      }
    }
    return null
  }

  /**
     * Creates a PostsList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PostsList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PostsList} PostsList
     */
  PostsList.fromObject = function fromObject (object) {
    if (object instanceof $root.PostsList) { return object }
    var message = new $root.PostsList()
    if (object.posts) {
      if (!Array.isArray(object.posts)) { throw TypeError('.PostsList.posts: array expected') }
      message.posts = []
      for (var i = 0; i < object.posts.length; ++i) {
        if (typeof object.posts[i] !== 'object') { throw TypeError('.PostsList.posts: object expected') }
        message.posts[i] = $root.Posts.fromObject(object.posts[i])
      }
    }
    return message
  }

  /**
     * Creates a plain object from a PostsList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PostsList
     * @static
     * @param {PostsList} message PostsList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  PostsList.toObject = function toObject (message, options) {
    if (!options) { options = {} }
    var object = {}
    if (options.arrays || options.defaults) { object.posts = [] }
    if (message.posts && message.posts.length) {
      object.posts = []
      for (var j = 0; j < message.posts.length; ++j) { object.posts[j] = $root.Posts.toObject(message.posts[j], options) }
    }
    return object
  }

  /**
     * Converts this PostsList to JSON.
     * @function toJSON
     * @memberof PostsList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  PostsList.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  /**
     * Gets the default type url for PostsList
     * @function getTypeUrl
     * @memberof PostsList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
  PostsList.getTypeUrl = function getTypeUrl (typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com'
    }
    return typeUrlPrefix + '/PostsList'
  }

  return PostsList
})()

$root.Empty = (function () {
  /**
     * Properties of an Empty.
     * @exports IEmpty
     * @interface IEmpty
     */

  /**
     * Constructs a new Empty.
     * @exports Empty
     * @classdesc Represents an Empty.
     * @implements IEmpty
     * @constructor
     * @param {IEmpty=} [properties] Properties to set
     */
  function Empty (properties) {
    if (properties) {
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
      }
    }
  }

  /**
     * Creates a new Empty instance using the specified properties.
     * @function create
     * @memberof Empty
     * @static
     * @param {IEmpty=} [properties] Properties to set
     * @returns {Empty} Empty instance
     */
  Empty.create = function create (properties) {
    return new Empty(properties)
  }

  /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encode
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Empty.encode = function encode (message, writer) {
    if (!writer) { writer = $Writer.create() }
    return writer
  }

  /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
  Empty.encodeDelimited = function encodeDelimited (message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
     * Decodes an Empty message from the specified reader or buffer.
     * @function decode
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Empty.decode = function decode (reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
    var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.Empty()
    while (reader.pos < end) {
      var tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  }

  /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  Empty.decodeDelimited = function decodeDelimited (reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
    return this.decode(reader, reader.uint32())
  }

  /**
     * Verifies an Empty message.
     * @function verify
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
  Empty.verify = function verify (message) {
    if (typeof message !== 'object' || message === null) { return 'object expected' }
    return null
  }

  /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Empty} Empty
     */
  Empty.fromObject = function fromObject (object) {
    if (object instanceof $root.Empty) { return object }
    return new $root.Empty()
  }

  /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Empty
     * @static
     * @param {Empty} message Empty
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
  Empty.toObject = function toObject () {
    return {}
  }

  /**
     * Converts this Empty to JSON.
     * @function toJSON
     * @memberof Empty
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
  Empty.prototype.toJSON = function toJSON () {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  /**
     * Gets the default type url for Empty
     * @function getTypeUrl
     * @memberof Empty
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
  Empty.getTypeUrl = function getTypeUrl (typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com'
    }
    return typeUrlPrefix + '/Empty'
  }

  return Empty
})()

$root.PostsService = (function () {
  /**
     * Constructs a new PostsService service.
     * @exports PostsService
     * @classdesc Represents a PostsService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
  function PostsService (rpcImpl, requestDelimited, responseDelimited) {
    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
  }

  (PostsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PostsService

  /**
     * Creates new PostsService service using the specified rpc implementation.
     * @function create
     * @memberof PostsService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {PostsService} RPC service. Useful where requests and/or responses are streamed.
     */
  PostsService.create = function create (rpcImpl, requestDelimited, responseDelimited) {
    return new this(rpcImpl, requestDelimited, responseDelimited)
  }

  /**
     * Callback as used by {@link PostsService#getAllPosts}.
     * @memberof PostsService
     * @typedef GetAllPostsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PostsList} [response] PostsList
     */

  /**
     * Calls GetAllPosts.
     * @function getAllPosts
     * @memberof PostsService
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {PostsService.GetAllPostsCallback} callback Node-style callback called with the error, if any, and PostsList
     * @returns {undefined}
     * @variation 1
     */
  Object.defineProperty(PostsService.prototype.getAllPosts = function getAllPosts (request, callback) {
    return this.rpcCall(getAllPosts, $root.Empty, $root.PostsList, request, callback)
  }, 'name', { value: 'GetAllPosts' })

  /**
     * Calls GetAllPosts.
     * @function getAllPosts
     * @memberof PostsService
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<PostsList>} Promise
     * @variation 2
     */

  /**
     * Callback as used by {@link PostsService#getPosts}.
     * @memberof PostsService
     * @typedef GetPostsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Posts} [response] Posts
     */

  /**
     * Calls GetPosts.
     * @function getPosts
     * @memberof PostsService
     * @instance
     * @param {IPostsId} request PostsId message or plain object
     * @param {PostsService.GetPostsCallback} callback Node-style callback called with the error, if any, and Posts
     * @returns {undefined}
     * @variation 1
     */
  Object.defineProperty(PostsService.prototype.getPosts = function getPosts (request, callback) {
    return this.rpcCall(getPosts, $root.PostsId, $root.Posts, request, callback)
  }, 'name', { value: 'GetPosts' })

  /**
     * Calls GetPosts.
     * @function getPosts
     * @memberof PostsService
     * @instance
     * @param {IPostsId} request PostsId message or plain object
     * @returns {Promise<Posts>} Promise
     * @variation 2
     */

  /**
     * Callback as used by {@link PostsService#deletePosts}.
     * @memberof PostsService
     * @typedef DeletePostsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Empty} [response] Empty
     */

  /**
     * Calls DeletePosts.
     * @function deletePosts
     * @memberof PostsService
     * @instance
     * @param {IPostsId} request PostsId message or plain object
     * @param {PostsService.DeletePostsCallback} callback Node-style callback called with the error, if any, and Empty
     * @returns {undefined}
     * @variation 1
     */
  Object.defineProperty(PostsService.prototype.deletePosts = function deletePosts (request, callback) {
    return this.rpcCall(deletePosts, $root.PostsId, $root.Empty, request, callback)
  }, 'name', { value: 'DeletePosts' })

  /**
     * Calls DeletePosts.
     * @function deletePosts
     * @memberof PostsService
     * @instance
     * @param {IPostsId} request PostsId message or plain object
     * @returns {Promise<Empty>} Promise
     * @variation 2
     */

  /**
     * Callback as used by {@link PostsService#editPosts}.
     * @memberof PostsService
     * @typedef EditPostsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Posts} [response] Posts
     */

  /**
     * Calls EditPosts.
     * @function editPosts
     * @memberof PostsService
     * @instance
     * @param {IPostsId} request PostsId message or plain object
     * @param {PostsService.EditPostsCallback} callback Node-style callback called with the error, if any, and Posts
     * @returns {undefined}
     * @variation 1
     */
  Object.defineProperty(PostsService.prototype.editPosts = function editPosts (request, callback) {
    return this.rpcCall(editPosts, $root.PostsId, $root.Posts, request, callback)
  }, 'name', { value: 'EditPosts' })

  /**
     * Calls EditPosts.
     * @function editPosts
     * @memberof PostsService
     * @instance
     * @param {IPostsId} request PostsId message or plain object
     * @returns {Promise<Posts>} Promise
     * @variation 2
     */

  /**
     * Callback as used by {@link PostsService#addPosts}.
     * @memberof PostsService
     * @typedef AddPostsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Posts} [response] Posts
     */

  /**
     * Calls AddPosts.
     * @function addPosts
     * @memberof PostsService
     * @instance
     * @param {IPosts} request Posts message or plain object
     * @param {PostsService.AddPostsCallback} callback Node-style callback called with the error, if any, and Posts
     * @returns {undefined}
     * @variation 1
     */
  Object.defineProperty(PostsService.prototype.addPosts = function addPosts (request, callback) {
    return this.rpcCall(addPosts, $root.Posts, $root.Posts, request, callback)
  }, 'name', { value: 'AddPosts' })

  /**
     * Calls AddPosts.
     * @function addPosts
     * @memberof PostsService
     * @instance
     * @param {IPosts} request Posts message or plain object
     * @returns {Promise<Posts>} Promise
     * @variation 2
     */

  return PostsService
})()

module.exports = $root
