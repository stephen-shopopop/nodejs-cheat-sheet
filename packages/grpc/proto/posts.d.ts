import * as $protobuf from 'protobufjs'
/** Properties of a Posts. */
export interface IPosts {

  /** Posts id */
  id?: (string|null)

  /** Posts title */
  title?: (string|null)

  /** Posts body */
  body?: (string|null)

  /** Posts category */
  category?: (string|null)
}

/** Represents a Posts. */
export class Posts implements IPosts {
  /**
     * Constructs a new Posts.
     * @param [properties] Properties to set
     */
  constructor (properties?: IPosts);

  /** Posts id. */
  public id: string

  /** Posts title. */
  public title: string

  /** Posts body. */
  public body: string

  /** Posts category. */
  public category: string

  /**
     * Creates a new Posts instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Posts instance
     */
  public static create (properties?: IPosts): Posts;

  /**
     * Encodes the specified Posts message. Does not implicitly {@link Posts.verify|verify} messages.
     * @param message Posts message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
  public static encode (message: IPosts, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
     * Encodes the specified Posts message, length delimited. Does not implicitly {@link Posts.verify|verify} messages.
     * @param message Posts message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
  public static encodeDelimited (message: IPosts, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
     * Decodes a Posts message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Posts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  public static decode (reader: ($protobuf.Reader|Uint8Array), length?: number): Posts;

  /**
     * Decodes a Posts message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Posts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  public static decodeDelimited (reader: ($protobuf.Reader|Uint8Array)): Posts;

  /**
     * Verifies a Posts message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
  public static verify (message: { [k: string]: any }): (string|null);

  /**
     * Creates a Posts message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Posts
     */
  public static fromObject (object: { [k: string]: any }): Posts;

  /**
     * Creates a plain object from a Posts message. Also converts values to other types if specified.
     * @param message Posts
     * @param [options] Conversion options
     * @returns Plain object
     */
  public static toObject (message: Posts, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
     * Converts this Posts to JSON.
     * @returns JSON object
     */
  public toJSON (): { [k: string]: any };

  /**
     * Gets the default type url for Posts
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
  public static getTypeUrl (typeUrlPrefix?: string): string;
}

/** Properties of a PostsId. */
export interface IPostsId {

  /** PostsId id */
  id?: (string|null)
}

/** Represents a PostsId. */
export class PostsId implements IPostsId {
  /**
     * Constructs a new PostsId.
     * @param [properties] Properties to set
     */
  constructor (properties?: IPostsId);

  /** PostsId id. */
  public id: string

  /**
     * Creates a new PostsId instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PostsId instance
     */
  public static create (properties?: IPostsId): PostsId;

  /**
     * Encodes the specified PostsId message. Does not implicitly {@link PostsId.verify|verify} messages.
     * @param message PostsId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
  public static encode (message: IPostsId, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
     * Encodes the specified PostsId message, length delimited. Does not implicitly {@link PostsId.verify|verify} messages.
     * @param message PostsId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
  public static encodeDelimited (message: IPostsId, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
     * Decodes a PostsId message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PostsId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  public static decode (reader: ($protobuf.Reader|Uint8Array), length?: number): PostsId;

  /**
     * Decodes a PostsId message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PostsId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  public static decodeDelimited (reader: ($protobuf.Reader|Uint8Array)): PostsId;

  /**
     * Verifies a PostsId message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
  public static verify (message: { [k: string]: any }): (string|null);

  /**
     * Creates a PostsId message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PostsId
     */
  public static fromObject (object: { [k: string]: any }): PostsId;

  /**
     * Creates a plain object from a PostsId message. Also converts values to other types if specified.
     * @param message PostsId
     * @param [options] Conversion options
     * @returns Plain object
     */
  public static toObject (message: PostsId, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
     * Converts this PostsId to JSON.
     * @returns JSON object
     */
  public toJSON (): { [k: string]: any };

  /**
     * Gets the default type url for PostsId
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
  public static getTypeUrl (typeUrlPrefix?: string): string;
}

/** Properties of a PostsList. */
export interface IPostsList {

  /** PostsList posts */
  posts?: (IPosts[]|null)
}

/** Represents a PostsList. */
export class PostsList implements IPostsList {
  /**
     * Constructs a new PostsList.
     * @param [properties] Properties to set
     */
  constructor (properties?: IPostsList);

  /** PostsList posts. */
  public posts: IPosts[]

  /**
     * Creates a new PostsList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PostsList instance
     */
  public static create (properties?: IPostsList): PostsList;

  /**
     * Encodes the specified PostsList message. Does not implicitly {@link PostsList.verify|verify} messages.
     * @param message PostsList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
  public static encode (message: IPostsList, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
     * Encodes the specified PostsList message, length delimited. Does not implicitly {@link PostsList.verify|verify} messages.
     * @param message PostsList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
  public static encodeDelimited (message: IPostsList, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
     * Decodes a PostsList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PostsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  public static decode (reader: ($protobuf.Reader|Uint8Array), length?: number): PostsList;

  /**
     * Decodes a PostsList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PostsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  public static decodeDelimited (reader: ($protobuf.Reader|Uint8Array)): PostsList;

  /**
     * Verifies a PostsList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
  public static verify (message: { [k: string]: any }): (string|null);

  /**
     * Creates a PostsList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PostsList
     */
  public static fromObject (object: { [k: string]: any }): PostsList;

  /**
     * Creates a plain object from a PostsList message. Also converts values to other types if specified.
     * @param message PostsList
     * @param [options] Conversion options
     * @returns Plain object
     */
  public static toObject (message: PostsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
     * Converts this PostsList to JSON.
     * @returns JSON object
     */
  public toJSON (): { [k: string]: any };

  /**
     * Gets the default type url for PostsList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
  public static getTypeUrl (typeUrlPrefix?: string): string;
}

/** Properties of an Empty. */
export interface IEmpty {
}

/** Represents an Empty. */
export class Empty implements IEmpty {
  /**
     * Constructs a new Empty.
     * @param [properties] Properties to set
     */
  constructor (properties?: IEmpty);

  /**
     * Creates a new Empty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Empty instance
     */
  public static create (properties?: IEmpty): Empty;

  /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
  public static encode (message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
  public static encodeDelimited (message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

  /**
     * Decodes an Empty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  public static decode (reader: ($protobuf.Reader|Uint8Array), length?: number): Empty;

  /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
  public static decodeDelimited (reader: ($protobuf.Reader|Uint8Array)): Empty;

  /**
     * Verifies an Empty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
  public static verify (message: { [k: string]: any }): (string|null);

  /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Empty
     */
  public static fromObject (object: { [k: string]: any }): Empty;

  /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @param message Empty
     * @param [options] Conversion options
     * @returns Plain object
     */
  public static toObject (message: Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

  /**
     * Converts this Empty to JSON.
     * @returns JSON object
     */
  public toJSON (): { [k: string]: any };

  /**
     * Gets the default type url for Empty
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
  public static getTypeUrl (typeUrlPrefix?: string): string;
}

/** Represents a PostsService */
export class PostsService extends $protobuf.rpc.Service {
  /**
     * Constructs a new PostsService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
  constructor (rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

  /**
     * Creates new PostsService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
  public static create (rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PostsService;

  /**
     * Calls GetAllPosts.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and PostsList
     */
  public getAllPosts (request: IEmpty, callback: PostsService.GetAllPostsCallback): void;

  /**
     * Calls GetAllPosts.
     * @param request Empty message or plain object
     * @returns Promise
     */
  public getAllPosts (request: IEmpty): Promise<PostsList>;

  /**
     * Calls GetPosts.
     * @param request PostsId message or plain object
     * @param callback Node-style callback called with the error, if any, and Posts
     */
  public getPosts (request: IPostsId, callback: PostsService.GetPostsCallback): void;

  /**
     * Calls GetPosts.
     * @param request PostsId message or plain object
     * @returns Promise
     */
  public getPosts (request: IPostsId): Promise<Posts>;

  /**
     * Calls DeletePosts.
     * @param request PostsId message or plain object
     * @param callback Node-style callback called with the error, if any, and Empty
     */
  public deletePosts (request: IPostsId, callback: PostsService.DeletePostsCallback): void;

  /**
     * Calls DeletePosts.
     * @param request PostsId message or plain object
     * @returns Promise
     */
  public deletePosts (request: IPostsId): Promise<Empty>;

  /**
     * Calls EditPosts.
     * @param request PostsId message or plain object
     * @param callback Node-style callback called with the error, if any, and Posts
     */
  public editPosts (request: IPostsId, callback: PostsService.EditPostsCallback): void;

  /**
     * Calls EditPosts.
     * @param request PostsId message or plain object
     * @returns Promise
     */
  public editPosts (request: IPostsId): Promise<Posts>;

  /**
     * Calls AddPosts.
     * @param request Posts message or plain object
     * @param callback Node-style callback called with the error, if any, and Posts
     */
  public addPosts (request: IPosts, callback: PostsService.AddPostsCallback): void;

  /**
     * Calls AddPosts.
     * @param request Posts message or plain object
     * @returns Promise
     */
  public addPosts (request: IPosts): Promise<Posts>;
}

export namespace PostsService {

    /**
     * Callback as used by {@link PostsService#getAllPosts}.
     * @param error Error, if any
     * @param [response] PostsList
     */
    type GetAllPostsCallback = (error: (Error|null), response?: PostsList) => void

    /**
     * Callback as used by {@link PostsService#getPosts}.
     * @param error Error, if any
     * @param [response] Posts
     */
    type GetPostsCallback = (error: (Error|null), response?: Posts) => void

    /**
     * Callback as used by {@link PostsService#deletePosts}.
     * @param error Error, if any
     * @param [response] Empty
     */
    type DeletePostsCallback = (error: (Error|null), response?: Empty) => void

    /**
     * Callback as used by {@link PostsService#editPosts}.
     * @param error Error, if any
     * @param [response] Posts
     */
    type EditPostsCallback = (error: (Error|null), response?: Posts) => void

    /**
     * Callback as used by {@link PostsService#addPosts}.
     * @param error Error, if any
     * @param [response] Posts
     */
    type AddPostsCallback = (error: (Error|null), response?: Posts) => void
}
