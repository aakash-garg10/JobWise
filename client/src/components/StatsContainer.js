import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug,FaWineGlassAlt } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/StatsContainer'

const StatsContainer = () => {
  const { stats } = useAppContext()

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#c7d7fc',
    },
    // {
    //   title: 'jobs declined',
    //   count: stats.declined || 0,
    //   icon: <FaBug />,
    //   color: '#d66a6a',
    //   bcg: '#ffeeee',
    // },
    {
      title: 'jobs accepted',
      count: stats.accepted || 0,
      icon: <FaWineGlassAlt />,
      color: 'green',
      bcg: '#bae8ba',
    },
    {
      title: 'jobs rejected',
      count: stats.rejected || 0,
      icon: <FaBug />,
      color: 'red',
      bcg: '#f7cfcf;',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
