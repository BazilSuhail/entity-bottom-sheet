declare module 'entity-bottom-sheet' {
  import { ReactNode } from 'react';
  import { ViewStyle } from 'react-native';

  interface BottomSheetProps {
    visible: boolean;
    onClose: () => void;
    heightRatio?: number;
    title?: string;
    children?: ReactNode;
  }

  export default function BottomSheet(props: BottomSheetProps): JSX.Element;
}
