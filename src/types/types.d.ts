interface Product {
  line: string;
  name: string;
  id: string;
  icon: Icon;
  shortNames: [];
  network?: Network;
}

interface Icon {
  resolutionBig: number;
  resolutionSmall: number;
  id: string;
}

interface Network {
  radios?: Radios;
  numberOfPorts?: number;
}

interface Radios {
  ng?: RadioContent;
  na?: RadioContent;
  "6e"?: RadioContent;
}

interface RadioContent {
  maxPower?: number;
  maxSpeedMegabitsPerSecond?: number;
}
