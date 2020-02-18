import { hello } from '../src/example';

// Unit Testing
describe('GET /', () => {
  // ok = true
  describe('when ok is true', () => {
    it('should return 200', async () => {
      const event = {
        queryStringParameters: {
          ok: 'true',
        },
        pathParameters: {
          id: '1',
        },
      };

      const response = await hello(event);

      expect(response.statusCode).toBe(200);
      expect(response.body).toBe('The endpoint is ok');
    });
  });

  // ok = false
  describe('when ok is false', () => {
    it('should return 400', async () => {
      const event = {
        queryStringParameters: {
          ok: 'false',
        },
        pathParameters: {
          id: '1',
        },
      };
      const response = await hello(event);

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe('The endpoint is not ok');
    });
  });

  // ok = undefined
  describe('when ok is undefined', () => {
    it('should return 400', async () => {
      const event = {
        queryStringParameters: {},
        pathParameters: {
          id: '1',
        },
      };

      const response = await hello(event);

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe('The endpoint is not ok');
    });
  });
});
