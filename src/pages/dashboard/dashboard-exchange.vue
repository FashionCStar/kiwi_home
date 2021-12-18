<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md">
      <div class="row q-mb-md">
        <div class="col-12 col-sm-6 q-pr-md">
          <p class="text-bold text-h6">Average growth of Bond Pool</p>
          <apexchart type="bar" height="350" style="width: 100% !important" :options="poolGrowthChartOptions" :series="poolGrowthSeries" />
        </div>
        <div class="col-12 col-sm-6 q-pl-md">
          <p class="text-bold text-h6">BondPool Value: BP100043AU</p>
          <q-card>
            <q-table
              :rows="transactionList"
              :columns="transactionColumns"
              row-key="transaction_date"
              :pagination="transaction_pagination"
            >
            </q-table>
          </q-card>
        </div>
      </div>
      <div class="row q-mb-md">
        <div class="col-12">
          <p class="text-bold text-h6">Your Bonds</p>
        </div>
        <div class="col-12 col-md-3 col-sm-6">
          <q-card class="q-ma-xs">
            <q-card-section>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
            </q-card-section>
            <q-separator dark style="background-color: #D0D3D5" />
            <q-card-section class="text-center">
              <span>Valuations</span>
              <div class="flex justify-between">
                <div>
                  REINZ $1,125,000
                </div>
                <div>
                  $ 1,185,000
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-3 col-sm-6">
          <q-card class="q-ma-xs">
            <q-card-section>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
            </q-card-section>
            <q-separator dark style="background-color: #D0D3D5" />
            <q-card-section class="text-center">
              <span>Valuations</span>
              <div class="flex justify-between">
                <div>
                  REINZ $1,125,000
                </div>
                <div>
                  $ 1,185,000
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-3 col-sm-6">
          <q-card class="q-ma-xs">
            <q-card-section>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
            </q-card-section>
            <q-separator dark style="background-color: #D0D3D5" />
            <q-card-section class="text-center">
              <span>Valuations</span>
              <div class="flex justify-between">
                <div>
                  REINZ $1,125,000
                </div>
                <div>
                  $ 1,185,000
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-3 col-sm-6">
          <q-card class="q-ma-xs">
            <q-card-section>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
              <p>Date of issue:  1/7/2022</p>
            </q-card-section>
            <q-separator dark style="background-color: #D0D3D5" />
            <q-card-section class="text-center">
              <span>Valuations</span>
              <div class="flex justify-between">
                <div>
                  REINZ $1,125,000
                </div>
                <div>
                  $ 1,185,000
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row q-mb-md">
        <div class="col-12 col-sm-6 q-pr-md">
          <div class="row">
            <div class="col-12">
              <p class="text-bold text-h6">Your Transactions</p>
            </div>
            <div class="col-12">
              <q-card>
                <q-table
                  :rows="transactionList"
                  :columns="transactionColumns"
                  row-key="transaction_date"
                  :pagination="transaction_pagination"
                >
                </q-table>
              </q-card>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 q-pr-md">
          <div class="row q-mb-md">
            <p class="text-bold text-h6">Trends</p>
            <apexchart type="line" height="350" style="width: 100% !important" :options="trendsChartOptions" :series="trendsSeries" />
          </div>
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
      poolGrowthSeries: [{
        name: 'Active',
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }, {
        name: 'Matured',
        data: [13, 23, 20, 8, 13, 27]
      }],
      poolGrowthChartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        // title: {
        //   text: 'Average growth of Bond Pool',
        //   align: 'left'
        // },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10
          },
        },
        xaxis: {
          type: 'string',
          categories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9'
          ],
        },
        fill: {
          opacity: 1,
          colors: ['#F17070', '#36B6C6']
        }
      },
      trendsSeries: [{
          name: "Projected Value",
          data: [13, 45, 38, 58, 69, 52, 79, 91, 148]
      }, {
          name: "Actual Value",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      trendsChartOptions: {
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
        // title: {
        //   text: 'Trends',
        //   align: 'left'
        // },
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
      transaction_pagination: {
        sortBy: 'transaction_date',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 20
      },
      transactionColumns: [
        { name: 'transaction_date', required: true, label: 'Date', align: 'left', field: 'transaction_date' },
        { name: 'payment_method', required: true, label: 'Payment Method', align: 'left', field: 'payment_method' },
        { name: 'pay_amount', required: true, label: 'Amount', align: 'left', field: 'pay_amount' },
        { name: 'payment_status', required: true, label: 'Status', align: 'left', field: 'payment_status' }
      ],
      transactionList: [
        { transaction_date: "1/9/2021", payment_method: "Bank transaction", pay_amount: 1000, payment_status: "Pending" },
        { transaction_date: "1/9/2021", payment_method: "Bank transaction", pay_amount: 1000, payment_status: "Processed" },
        { transaction_date: "1/9/2021", payment_method: "Bank transaction", pay_amount: 1000, payment_status: "Processed" },
        { transaction_date: "1/9/2021", payment_method: "Bank transaction", pay_amount: 1000, payment_status: "Processed" },
        { transaction_date: "1/9/2021", payment_method: "Bank transaction", pay_amount: 1000, payment_status: "Processed" },
        { transaction_date: "1/9/2021", payment_method: "Bank transaction", pay_amount: 1000, payment_status: "Processed" }
      ]
    }
  }
}
</script>
