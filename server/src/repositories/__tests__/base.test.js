const BaseRepository = require('../index')

describe('BaseRepository', () => {
  test('It should call get head and tail propertly given an page and limit', () => {
    const repository = new BaseRepository(jest.fn, jest.fn)
    const limit = 20
    const pages = [ 0, 1, 2 ]
    const expectHeads = [ 0, 0, 20 ]
    const expectTails = [ 20, 20, 40 ]

    pages.map((page, i) => {
      const { head, tail } = repository.getHeadTail(page, limit)
      expect(head).toBe(expectHeads[i])
      expect(tail).toBe(expectTails[i])
    })
  })

  test('It should get data from API and cache if it doesn\'t exits', async () => {
    const expectedResponse = { items: ['dummy'] }
    const mockApiService = {
      fetch: jest.fn(() => Promise.resolve(expectedResponse))
    }
    const mockCacheService = {
      get: jest.fn(() => Promise.resolve()),
      set: jest.fn(() => Promise.resolve()),
      expire: jest.fn(() => Promise.resolve())
    }

    const repository = new BaseRepository(mockCacheService, mockApiService)
    const data = await repository.getData('dummy_endpoint', 'dummy_key', 5)

    expect(mockApiService.fetch).toHaveBeenCalledWith('dummy_endpoint')
    expect(mockCacheService.get).toHaveBeenCalledWith('dummy_key')
    expect(mockCacheService.set).toHaveBeenCalledWith('dummy_key', JSON.stringify(expectedResponse), 5)
    expect(data).toBe(expectedResponse)
  })

  test('It should get data from cache', async () => {
    const expectedResponse = { items: ['dummy'] }
    const mockApiService = {
      fetch: jest.fn(() => Promise.resolve(expectedResponse))
    }
    const mockCacheService = {
      get: jest.fn(() => Promise.resolve(JSON.stringify(expectedResponse)))
    }

    const repository = new BaseRepository(mockCacheService, mockApiService)
    const data = await repository.getData('dummy_endpoint', 'dummy_key', 5)

    expect(mockCacheService.get).toHaveBeenCalledWith('dummy_key')
    expect(mockApiService.fetch).not.toHaveBeenCalled()
    expect(data).toEqual(expectedResponse)
  })
})
