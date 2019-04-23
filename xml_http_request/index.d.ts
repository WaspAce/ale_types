declare class XMLHttpRequest {
  readonly status: number;
  readonly timeout: number;
  readonly statusText: string;
  readonly responseText: string;
  readonly readyState: number;

  constructor(delegate?: object);

  open(
    method: string,
    url: string,
    async?: boolean,
    user?: string,
    password?: string
  ): void;

  send(
    body?: number[] | string
  ): void;

  setRequestHeader(
    key: string,
    value: string
  ): void;

  getResponseHeader(
    key: string
  ): string;

  getAllResponseHeaders(): string;

  abort(): void;

  getResponseBytes(): number[];

  removeRequestHeader(
    key: string
  );
  
  onreadystatechange: () => void;
  ontimeout: () => void;
  onerror: () => void;
  onload: () => void;
  onloadend: () => void;
  onloadstart: () => void;
}