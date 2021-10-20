import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

export default function ADA_Logo(props: SvgProps) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <G clipPath="url(#prefix__clip0_244:17)">
        <Path
          d="M19.51.118c.871-.492 1.935.65 1.472 1.592-.269.769-1.289.973-1.81.387-.552-.562-.372-1.673.337-1.979zm-9.378 1.094c.53-.236 1.2.29 1.146.914.056.678-.71 1.177-1.25.855-.715-.3-.633-1.556.104-1.769zM29.337 3c-.827-.108-.958-1.516-.161-1.8.618-.326 1.185.286 1.275.92-.13.54-.548 1.036-1.114.88zM12.266 5.531c.885-.606 2.149.297 2.012 1.41-.046 1.124-1.425 1.775-2.203 1.015-.752-.597-.638-1.966.19-2.425zm13.516.643c.395-1.101 1.996-1.135 2.445-.062.445.835-.102 1.868-.894 2.152-1.049.212-2.045-1.015-1.551-2.09zM18.38 8.201c-.009-.947.788-1.652 1.62-1.717.552.12 1.153.374 1.39.977.44.83.049 1.975-.748 2.356-.364.221-.795.138-1.192.112-.607-.322-1.117-.954-1.07-1.728zM4.435 9.581c.809-.538 1.9.444 1.594 1.395-.169.822-1.19 1.157-1.774.632-.624-.492-.525-1.675.18-2.027zM34.38 9.58c.686-.576 1.819.085 1.737 1.023.046.855-.933 1.5-1.614 1.06-.75-.366-.827-1.615-.123-2.083zm-12.078 1.703c1.132-.44 2.477.086 3.122 1.179.852 1.336.399 3.37-.922 4.136-1.37.907-3.368.138-3.874-1.516-.574-1.481.262-3.335 1.674-3.8zm-6.644.146c1.255-.642 2.944-.104 3.55 1.286.713 1.352.162 3.235-1.114 3.933-1.277.785-3.078.19-3.696-1.262-.693-1.404-.078-3.311 1.26-3.957zm-6.653 2.461c.095-.875.858-1.445 1.628-1.503.829.108 1.491.805 1.582 1.713-.055.9-.697 1.778-1.577 1.772-.969.09-1.818-.952-1.633-1.982zm19.65-1.313c.994-.627 2.375.285 2.33 1.522.069 1.31-1.46 2.233-2.45 1.464-1.028-.64-.948-2.441.12-2.986zm-15.701 4.617c1.163-.347 2.493.247 3.063 1.403.625 1.165.37 2.783-.601 3.637-1.245 1.253-3.54.75-4.202-.96-.762-1.567.163-3.668 1.74-4.08zm12.602-.007c1.13-.35 2.458.122 3.066 1.236.804 1.275.42 3.177-.776 3.999-1.253.954-3.195.453-3.884-1.04-.836-1.543.005-3.724 1.594-4.195zM5.474 18.641c1.004-.412 2.118.788 1.71 1.866-.248.982-1.527 1.345-2.187.621-.773-.68-.487-2.192.477-2.487zm27.23 1.564c-.03-.9.58-1.699 1.433-1.748.688.117 1.357.718 1.303 1.529.063 1.07-1.13 1.798-1.972 1.295-.395-.217-.598-.656-.764-1.076zM.534 19.17c.604-.286 1.352.28 1.214 1.007-.032.823-1.154 1.139-1.567.452-.364-.478-.146-1.213.353-1.46zm38.109-.017c.425-.328 1.108-.092 1.277.446.286.588-.239 1.393-.85 1.293-.858.085-1.136-1.33-.427-1.739zm-22.406 3.948c1.59-.447 3.3.988 3.31 2.76.103 1.791-1.58 3.38-3.208 2.966-1.259-.22-2.246-1.532-2.205-2.908-.004-1.316.914-2.54 2.103-2.818zm6.298-.003c1.614-.489 3.375.972 3.35 2.786.084 1.757-1.547 3.292-3.14 2.943-1.5-.21-2.608-1.993-2.189-3.569.212-1.05 1.022-1.903 1.979-2.16zm-12.144 1.09c1.117-.206 2.164 1.143 1.711 2.29-.33 1.224-1.975 1.556-2.702.557-.853-.96-.216-2.714.991-2.846zm18.471.054c.996-.451 2.219.481 2.142 1.651.04 1.288-1.47 2.176-2.443 1.424-1.103-.674-.903-2.66.301-3.075zm5.163 5.605c-.39-.787.318-1.83 1.126-1.684.401-.008.682.335.94.622.052.467.141 1.023-.217 1.382-.485.665-1.585.476-1.849-.32zM4.432 28.382c.754-.544 1.84.267 1.67 1.221-.09.845-1.073 1.327-1.72.848-.695-.435-.669-1.673.05-2.07zm14.904 1.767c.987-.472 2.245.459 2.152 1.636.073 1.3-1.483 2.202-2.449 1.42-1.072-.67-.894-2.643.297-3.056zm-6.903 1.743c.84-.48 1.97.348 1.893 1.367.026.837-.729 1.55-1.492 1.426-.631-.015-1.043-.628-1.246-1.21.01-.636.252-1.344.845-1.583zm13.982.015c.865-.58 2.095.252 2.013 1.341.022 1.14-1.367 1.869-2.173 1.12-.78-.586-.684-1.995.16-2.462zm2.432 6.505c-.385-.63.068-1.389.693-1.533.502.111 1.034.52.928 1.15-.073.853-1.226 1.115-1.621.383zm-19.302-.547c.153-.5.524-.995 1.067-.866.792.061 1.027 1.353.334 1.75-.623.456-1.346-.167-1.401-.884zm9.312.573c.152-.739 1.035-1.098 1.618-.706.384.18.497.645.596 1.041-.053.207-.1.413-.147.62-.238.305-.545.611-.941.6-.738.094-1.403-.809-1.126-1.555z"
          fill="#3CC8C8"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_244:17">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
