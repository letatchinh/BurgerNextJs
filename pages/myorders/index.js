import { Button, Pagination, Space, Typography } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { v4 } from "uuid";
import RowOrder from "../../components/RowOrder";
import axiosClient from "../../constant/AxiosConfig";
import styles from "../../styles/table.module.scss";
const fetcher = (url) => axiosClient.get(url).then((res) => res.data);
const { Title } = Typography;
export default function index() {

  const [page, setPage] = useState(1);
  const {data:session} = useSession()
  const router = useRouter();
  // const user = useSelector((state) => state.user.user) || {};
  const { data, error } = useSWR(
    `api/userOrder/${session && session.user.email}?page=${page}`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  return (
    <div style={{ padding: "50px 0" , margin : '0 auto' }}>
      <Title style={{textAlign  : 'center'}} level={2}>My Order</Title>
      {!data ? (
        <div style={{textAlign : 'center'}}>...loading</div>
      ) : data && data.arrResponse.length === 0 ? (
        <Space direction="vertical" align="center">
          <Typography>Ops You don't have any orders yet </Typography>
          <Button
            sx={{ width: "150px" }}
            variant="outlined"
            onClick={() => router.push("/")}
          >
            Go Order
          </Button>
        </Space>
      ) : (
        <div style={{display : 'flex' , flexDirection : 'column' , alignItems :'center'}}>
          <table className={styles.MyTable}>
            <thead>
              <tr>
                <td style={{ width: "70%" }}>Ingredients</td>
                <td>
                  <Space
                    direction="row"
                    style={{ justifyContent: "space-between" }}
                    align="center"
                  >
                    <Typography>Price</Typography>
                    {/* <Space>
                    <ArrowDropUpIcon onClick={() => setPage(page-1)} sx={{cursor : 'pointer' , display : page === 1 ? 'none' : 'block'}}/>
                    <ArrowDropDownIcon onClick={() => setPage(page+1)} sx={{cursor : 'pointer'}}/>
                </Space> */}
                  </Space>
                </td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.arrResponse.map((e) => <RowOrder key={v4()} item={e} />)}
            </tbody>
          </table>
          <Space  spacing={1}>
            <Button
              variant="outlined"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Pre
            </Button>
            <Pagination pageSize={4} current={page} onChange={(page,pageSize) => setPage(page)} total={data.count} />
            <Button disabled={data.pages === page} variant="outlined" onClick={() => setPage(page + 1)}>
              Next
            </Button>
          </Space>
        </div>
      )}
    </div>
  );
}
