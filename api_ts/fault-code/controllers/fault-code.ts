import { toBuffer } from "qrcode";

export async function qrcode(ctx) {
  const entity = await strapi.services["fault-code"].findOne({
    id: ctx.params.id,
  });
  const qrCode: Buffer = await toBuffer(
    JSON.stringify({
      id: entity.id,
      dtcSpnStart: entity.dtcSpnStart,
      dtcSpnEnd: entity.dtcSpnEnd,
    })
  );
  ctx.response.type = "image/png";
  ctx.response.length = qrCode.length;
  ctx.response.body = qrCode;
}
