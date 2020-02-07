const parseCurrentBranch = (strData: string): string => {
  const reg = new RegExp(/^[*]\s/);

  return strData
    .split("\n")
    .filter(branch => reg.test(branch))[0]
    .replace(reg, "");
};

export default { parseCurrentBranch };
