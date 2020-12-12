import useStore from '@/helpers/store'
import MyBox from '@/components/canvas/MyBox/MyBox'
import { Helmet } from 'react-helmet'

const BoxesDom = () => {
  return (
    <h1 className='absolute p-2 text-3xl z-10 w-full mx-auto text-center text-gray-900 dark:text-gray-100'>
      R3F Next Starter - Click on a box to navigate
    </h1>
  )
}

const Dom = () => {
  return (
    <>
      <Helmet title={'Welcome'} />
      <BoxesDom />
    </>
  )
}

const BoxGroup = () => {
  return (
    <group position={[0, 0, -20]}>
      <MyBox position={[10, 0, -5]} />
      <MyBox position={[-10, 0, -5]} />
      <MyBox position={[0, 10, 0]} />
      <MyBox position={[0, -5, 5]} />
    </group>
  )
}
const BoxGroup2 = () => {
  return (
    <group position={[0, 0, -10]}>
      <MyBox position={[5, 0, -5]} />
    </group>
  )
}

// canvas is required and dom is optional
const Page = () => {
  useStore.setState({ loading: false })
  return (
    <>
      <BoxGroup r3f />
      <Dom />
    </>
  )
}

export default Page
