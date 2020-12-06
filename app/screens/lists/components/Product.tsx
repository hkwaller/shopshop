import React from 'react'
import { View, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { TapGestureHandler } from 'react-native-gesture-handler'
import { Bold, Subtitle } from 'app/components'
import { spacing } from 'app/utils'
import { Product as ProductType } from 'app/utils/types'
import CategoryIcon from './CategoryIcon'
import Checkmark from 'app/components/Checkmark'

type Props = {
  product: ProductType
}

function Product({ product }: Props) {
  const pressed = useSharedValue(1)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      pressed.value = 0.85
    },
    onCancel: () => {
      pressed.value = 1
    },
    onFail: () => {
      pressed.value = 1
    },
    onEnd: () => {
      pressed.value = 1
    },
  })

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(pressed.value) }],
    }
  })

  return (
    <TapGestureHandler onHandlerStateChange={gestureHandler}>
      <Animated.View style={[styles.container, style]}>
        <View style={styles.rowLeft}>
          <CategoryIcon category={product.category} />
          <View style={{ marginLeft: spacing.lg }}>
            <Bold>{product.name}</Bold>
            <Subtitle>{product.category.name}</Subtitle>
          </View>
        </View>
        <Checkmark checked={product.checked} />
      </Animated.View>
    </TapGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 12,
    marginVertical: spacing.md,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Product
