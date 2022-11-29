function check_mail(val) {
  var str = val;
  var patt = new RegExp(/^([\w\d]{3,}@([\w]{1,}[.]{1}){1,2}[\w]{1,})/gm);
  var result = patt.test(str);
  return result;
}
function check_phone(val) {
  var str = val;
  var patt = new RegExp(/(84|0[1-9])+([0-9]{8})/gm);
  var result = patt.test(str);
  return result; //return true if correct
}

export const validate = {
  check_mail,
  check_phone,
};
