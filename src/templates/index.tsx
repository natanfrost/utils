export const base = `module.exports = {
  enabled: true,
  path: {{path}},
  method: {{method}},
  mockData: (params, query) => ({
    status: {{status_code}},
    data: {{data}}
  })
};`
