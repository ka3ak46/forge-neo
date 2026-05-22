module.exports = {
  run: [
    {
      method: "fs.copy",
      params: {
        src: "app/config.json",
        dest: "app/config_old.json"
      }
    },
    {
      method: "fs.copy",
      params: {
        src: "app/ui-config.json",
        dest: "app/ui-config_old.json"
      }
    },
    {
      method: "fs.rm",
      params: {
        path: "app/config.json"
      }
    },
    {
      method: "fs.rm",
      params: {
        path: "app/ui-config.json"
      }
    }
  ]
}