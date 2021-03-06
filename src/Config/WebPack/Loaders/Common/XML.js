export default function (contextPath, outputPath) {
  const fileLoaderPath = `${require.resolve('file-loader')}?context=${contextPath}&name=[path][name].[ext]?[hash]`;
  return [
    {
      test: /(^|\/|\\)browserconfig\.xml$/,
      loader: fileLoaderPath
    }
  ];
}
