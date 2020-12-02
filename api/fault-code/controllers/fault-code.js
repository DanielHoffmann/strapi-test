const { toBuffer } = require("qrcode");

module.exports = {
  async qrcode(ctx) {
    const entity = await strapi.services["fault-code"].findOne({
      id: ctx.params.id,
    });
    if (entity == null) {
      ctx.response.status = 404;
      return;
    }
    const qrCode = await toBuffer(
      JSON.stringify({
        id: entity.id,
        dtcSpnStart: entity.dtcSpnStart,
        dtcSpnEnd: entity.dtcSpnEnd,
      })
    );
    ctx.response.type = "image/png";
    ctx.response.length = qrCode.length;
    ctx.response.body = qrCode;
  },
};
