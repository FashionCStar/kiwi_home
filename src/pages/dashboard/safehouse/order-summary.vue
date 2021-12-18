<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md">
      <div class="row q-mb-md">
        <div class="col-12">
          <p class="text-bold text-h6">Order Summary</p>
        </div>
        <div class="col-12">
          <q-card class="q-ma-xs">
            <q-table
              :rows="orderList"
              :columns="orderColumns"
              row-key="doi"
            >
            </q-table>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: 'Exchange Dashboard',
  components: {
    apexchart: VueApexCharts,
  },
  setup () {
    return {
      historySeries: [{
          name: "Projected Value",
          data: [13, 45, 38, 58, 69, 52, 79, 91, 148]
      }, {
          name: "Actual Value",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      historyChartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
      // transaction_pagination: {
      //   sortBy: 'transaction_date',
      //   descending: false,
      //   page: 1,
      //   rowsPerPage: 10,
      //   rowsNumber: 20
      // },
      orderColumns: [
        { name: 'nz_bondcode', required: true, label: 'NZ Bond Code', align: 'left', field: 'nz_bondcode' },
        { name: 'ordertype', required: true, label: 'OrderType', align: 'left', field: 'ordertype' },
        { name: 'quantity', required: true, label: 'Quantity', align: 'left', field: 'quantity' },
        { name: 'price', required: true, label: 'Price', align: 'left', field: 'price' },
        { name: 'total', required: true, label: 'Total', align: 'left', field: 'total' },
        { name: 'term', required: true, label: 'Term', align: 'left', field: 'term' },
        { name: 'buy_sell', required: true, label: 'Buy/Sell', align: 'left', field: 'buy_sell' },
        { name: 'status', required: true, label: 'Status', align: 'left', field: 'status' },
        { name: 'condition', required: true, label: 'Condition', align: 'left', field: 'condition' },
      ],
      orderList: [
        { nz_bondcode: "NZ01100-APC", ordertype: "Market", quantity: "1", price: "1000", total: "1000", term: "10/10/21@20:30", buy_sell: "Buy", status: "Closed", condition: "" },
        { nz_bondcode: "NZ01100-APC", ordertype: "Market", quantity: "1", price: "1000", total: "1000", term: "10/10/21@20:30", buy_sell: "Buy", status: "Open", condition: "Buy 5,200. Cancel < 4800" },
        { nz_bondcode: "NZ01100-APC", ordertype: "Market", quantity: "1", price: "1000", total: "1000", term: "10/10/21@20:30", buy_sell: "Sell", status: "Closed", condition: "" },
        { nz_bondcode: "NZ01100-APC", ordertype: "Market", quantity: "1", price: "1000", total: "1000", term: "10/10/21@20:30", buy_sell: "Buy", status: "Closed", condition: "" },
        { nz_bondcode: "NZ01100-APC", ordertype: "Market", quantity: "1", price: "1000", total: "1000", term: "10/10/21@20:30", buy_sell: "Buy", status: "Closed", condition: "" },
      ],
      bondSchedulerList: [
        { bond_pool: "BP100165AU", bond_price: 1100, expiry_date: "01/01/2022" },
        { bond_pool: "BP300169NZ", bond_price: 1100, expiry_date: "01/11/2022" }
      ]
    }
  }
}
</script>
