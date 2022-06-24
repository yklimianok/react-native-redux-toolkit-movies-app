import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '@src/constants/colors.constants';
import { setModerateScale } from '@src/services/scale.services';

export default ScaledSheet.create({
  noResultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noResultsDescription: {
    fontFamily: 'Asap-Regular',
    fontSize: setModerateScale(24),
    color: COLORS.GRAY_COLOR,
  },
});
