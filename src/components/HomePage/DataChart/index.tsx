import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts' //(*===所有)，导入所有 并命名为echarts

const Echarts = () => {
    const chartRef = useRef()
    const options = {
        tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1000, name: '浏览量' },
                { value: 800, name: '注册数' },
                { value: 580, name: '报名数' },
                { value: 484, name: '提交作品数' },
                { value: 300, name: '审核通过数' }
              ]
            }
          ]
    }

    useEffect(() => {
        // 创建一个echarts实例，返回echarts实例。不能在单个容器中创建多个echarts实例
        const chart = echarts.init(chartRef.current!)

        // 设置图表实例的配置项和数据
        chart.setOption(options)

        // 组件卸载
        return () => {
            // myChart.dispose() 销毁实例。实例销毁后无法再被使用
            chart.dispose()
        }
    },[])

    return(
        // 宽度要大，不然y轴有些名称可能不会显示
        <div style={{width: "600px", height: "400px"}} ref={chartRef}></div>
    )
}
export default Echarts
