import {useDispatch } from 'react-redux'
import {getUserTableDraft} from "../store/actions"
import { useEffect } from 'react';

function Users() {
  // const [data,setData]= useState([])
  // useEffect(()=> {
  //   axios.get('http://localhost:8000/users')
  //   .then(res => setData(res.data[0]))
  //   .catch(err =>console.log(err))
  // },[])
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getUserTableDraft())

}, [dispatch])



    const columns = [
    { title: 'Name', dataIndex: 'name', key:"1",render:(user: { name: any; surname: any; })=> <span>{`${user.name} ${user.surname}`}</span> },
    {
      title: 'Name',
      dataIndex: 'name',
      key: '1',
      render: (user: { name: any; surname: any; }) => (
        <span>{`${user.name} ${user.surname}`}</span>
      ),
    },
    { title: 'Phone', dataIndex: 'phone',key:"3" }
  ];
  return (
    <div>
      
      {/* <Table columns={columns} dataSource={data} /> */}
    </div>
  )
}
export default Users


