'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const finalCssObject = {};
  const TEXT_SPLIT_OPERATOR = ';';
  const LINE_SPLIT_OPERATOR = ':';
  const PROPERTY_KEY_INDEX = 0;
  const PROPERTY_VALUE_INDEX = 1;

  sourceString.split(TEXT_SPLIT_OPERATOR).map((line) => {
    const lineParts = line.split(LINE_SPLIT_OPERATOR);
    const keyPart = lineParts[PROPERTY_KEY_INDEX]?.trim();
    const valuePart = lineParts[PROPERTY_VALUE_INDEX]?.trim();

    finalCssObject[keyPart] = valuePart;
  });

  return finalCssObject;
}

module.exports = convertToObject;
