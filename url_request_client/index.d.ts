declare type UrlRequestClientOnRequestComplete = (
  request: UrlRequest
) => void;

/**
* |current| denotes the number of bytes sent so far and
* |total| is the total size of uploading data (or -1 if
* chunked upload is enabled). This function will only be called if the
* UR_FLAG_REPORT_UPLOAD_PROGRESS flag is set on the request.
*/
declare type UrlRequestClientOnUploadProgress = (
  request: UrlRequest,
  current: number,
  total: number
) => void;

/**
* |current| denotes the number of
* bytes received up to the call and |total| is the expected total size of the
* response (or -1 if not determined).
*/
declare type UrlRequestClientOnDownloadProgress = (
  request: UrlRequest,
  current: number,
  total: number
) => void;

/**
* This function will not be called if the
* UR_FLAG_NO_DOWNLOAD_DATA flag is set on the request.
*/
declare type UrlRequestClientOnDownloadData = (
  request: UrlRequest,
  data_length: number
) => void;

/**
* |isProxy| indicates whether the host is a proxy server. |host| contains the
* hostname and |port| contains the port number. Return true (1) to continue
* the request and call callback.cont() when the authentication
* information is available. If the request has an associated browser/frame
* then returning false (0) will result in a call to GetAuthCredentials on the
* [[RequestHandler]] associated with that browser, if any. Otherwise,
* returning false (0) will cancel the request immediately. This function will
* only be called for requests initiated from the browser process.
*/
declare type UrlRequestClientOnGetAuthCredentials = (
  is_proxy: boolean,
  host: string,
  port: number,
  realm: string,
  scheme: string,
  callback: AuthCallback
) => boolean;

/**
 * UrlRequests handler.
 */
declare class UrlRequestClient {
  /**
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  )

  /**
   * Notifies the client that the request has completed. Use the
   * request.request_status to determine if the request was
   * successful or not.
   * @event
   */
  on_request_complete: UrlRequestClientOnRequestComplete;

  /**
   * Notifies the client of upload progress.
   * @event
   */
  on_upload_progress: UrlRequestClientOnUploadProgress;

  /**
   * Notifies the client of download progress.
   */
  on_download_progress: UrlRequestClientOnDownloadProgress;

  /**
   * Called when some part of the response is read.
   */
  on_download_data: UrlRequestClientOnDownloadData;

  /**
   * Called on the IO thread when the browser needs credentials from the user.
   */
  get_auth_credentials: UrlRequestClientOnGetAuthCredentials;
}
