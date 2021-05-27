export function getKeyCode(event:any) {
  let code;
  if (event.key !== undefined) {
    code = event.key;
  } else if (event.keyCode !== undefined) {
    code = event.keyCode
  };
  return code;
}