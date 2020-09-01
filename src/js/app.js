export default function phoneCleaner(dryPhone) {
  return dryPhone.match(/(\+?\d*)/g).filter((e) => e && e)
    .map((e, i) => !i && e[0] != '+' ? e = e.replace(/(7|8)/, '+7') : e).join('');
}
