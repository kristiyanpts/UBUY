export function parseError(error) {
  if (error.name == "ValidationError") {
    let err = Object.values(error.err);
    return Object.values(err[0]).map((v) => v.properties.message);
  } else {
    return error.message.split("\n");
  }
}
