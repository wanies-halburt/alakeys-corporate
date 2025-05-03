import fs from "fs";

// export function parseHtmlFile(htmlFile, variables) {
//   const htmlContent = fs.readFileSync(htmlFile, "utf-8");

//   let processedContent = htmlContent;
//   // Replace variables with corresponding values
//   variables.forEach(({ variable, value }) => {
//     const regex = new RegExp(`(?<!<svg[^>]*>){{${variable}}}(?!</svg>)`, "g");
//     processedContent = processedContent.replace(regex, value);
//   });

//   return processedContent;
// }

export function parseHtmlFile(htmlFile, variables) {
  const htmlContent = fs.readFileSync(htmlFile, "utf-8");
  let processedContent = htmlContent;

  // Function to replace array loops
  function replaceArrayLoops(content) {
    const arrayRegex = /{{#(.*?)}}(.*?){{\/\1}}/gs;
    return content.replace(arrayRegex, (match, arrayName, template) => {
      const array = variables.find((v) => v.variable === arrayName)?.value;
      if (Array.isArray(array)) {
        return array
          .map((item) => {
            let itemTemplate = template;
            Object.keys(item).forEach((key) => {
              const regex = new RegExp(`{{${key}}}`, "g");
              itemTemplate = itemTemplate.replace(regex, item[key]);
            });
            return itemTemplate;
          })
          .join("");
      }
      return "";
    });
  }

  // Replace array loops
  processedContent = replaceArrayLoops(processedContent);

  // Replace simple variables
  variables.forEach(({ variable, value }) => {
    if (!Array.isArray(value)) {
      const regex = new RegExp(`(?<!<svg[^>]*>){{${variable}}}(?!</svg>)`, "g");
      processedContent = processedContent.replace(regex, value);
    }
  });

  return processedContent;
}
