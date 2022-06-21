import fetch, { Headers, Request, Response, FormData, Blob } from "node-fetch";
if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

if (!globalThis.Headers) {
  globalThis.Headers = Headers;
}

if (!globalThis.Request) {
  globalThis.Request = Request;
}

if (!globalThis.Response) {
  globalThis.Response = Response;
}

if (!globalThis.FormData) {
  globalThis.FormData = FormData;
}

if (!globalThis.Blob) {
  globalThis.Blob = Blob;
}
