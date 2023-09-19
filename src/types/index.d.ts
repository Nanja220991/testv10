export {};

declare global {
  namespace Express {
    interface Request {
      user: any;
      body: any;
      status: number;
      params: any;
    }
  }
}