// custom type declaration for raw import
declare module "*.tsx?raw" {
  const content: string;
  export default content;
}
