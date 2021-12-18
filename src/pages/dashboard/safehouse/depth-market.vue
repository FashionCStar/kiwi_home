<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md">
      <div class="row q-mb-md">
        <div class="col-12">
          <p class="text-bold text-h6">Your Bonds</p>
        </div>
        <div class="col-12">
          <q-card class="q-ma-xs">
            <q-table
              :rows="bondList"
              :columns="bondColumns"
              row-key="doi"
            >
            </q-table>
          </q-card>
        </div>
      </div>
      <div class="row q-mb-md">
        <div class="col-12">
          <p class="text-bold text-h6">Holding</p>
        </div>
        <div class="col-12">
          <q-card class="q-ma-xs">
            <q-table
              :rows="bondList"
              :columns="bondColumns"
              row-key="doi"
            >
            </q-table>
          </q-card>
        </div>
      </div>
      <div class="row q-mb-md">
        <div class="col-12">
          <p class="text-bold text-h6">Active Positions</p>
        </div>
        <div class="col-12">
          <q-card class="q-ma-xs">
            <q-table
              :rows="bondList"
              :columns="bondColumns"
              row-key="doi"
            >
            </q-table>
          </q-card>
        </div>
      </div>
      <div class="row q-mb-md">
        <p class="text-bold text-h6">History</p>
        <apexchart type="line" height="350" style="width: 100% !important" :options="historyChartOptions" :series="historySeries" />
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
      bondColumns: [
        { name: 'doi', required: true, label: 'DOI', align: 'left', field: 'doi' },
        { name: 'doe', required: true, label: 'DOE', align: 'left', field: 'doe' },
        { name: 'cp', required: true, label: 'CP', align: 'left', field: 'cp' },
        { name: 'reinz', required: true, label: 'REINZ', align: 'left', field: 'reinz' },
        { name: 'cp_reinz', required: true, label: 'CP ∆ REINZ', align: 'left', field: 'cp_reinz' },
        { name: 'cl', required: true, label: 'CL', align: 'left', field: 'cl' },
        { name: 'cp_cl', required: true, label: 'CP ∆ CL', align: 'left', field: 'cp_cl' },
        { name: 'nzhpi', required: true, label: 'NZ HPI', align: 'left', field: 'nzhpi' },
        { name: 'cp_nzhpi', required: true, label: 'CP ∆ NZHPI', align: 'left', field: 'cp_nzhpi' },
        { name: 'status', required: true, label: 'Status', align: 'left', field: 'status' },
        { name: 'contracts', required: true, label: 'Contracts', align: 'left', field: 'contracts' },
        { name: 'settled', required: true, label: 'Settled', align: 'left', field: 'settled' },
        { name: 'total', required: true, label: 'Total', align: 'left', field: 'total' }
      ],
      bondList: [
        { doi: "May@2021", doe: "May@2021", cp: "1000", reinz: "1000", cp_reinz: "50", cl: "1000", cp_cl: "50", nzhpi: "1000", cp_nzhpi: "50", status: "Pending", contracts: "25", settled: "0", total: "25" },
        { doi: "May@2021", doe: "May@2021", cp: "1000", reinz: "1000", cp_reinz: "50", cl: "1000", cp_cl: "50", nzhpi: "1000", cp_nzhpi: "50", status: "Pending", contracts: "25", settled: "0", total: "25" },
        { doi: "May@2021", doe: "May@2021", cp: "1000", reinz: "1000", cp_reinz: "50", cl: "1000", cp_cl: "50", nzhpi: "1000", cp_nzhpi: "50", status: "Pending", contracts: "25", settled: "0", total: "25" },
        { doi: "May@2021", doe: "May@2021", cp: "1000", reinz: "1000", cp_reinz: "50", cl: "1000", cp_cl: "50", nzhpi: "1000", cp_nzhpi: "50", status: "Pending", contracts: "25", settled: "0", total: "25" },
        { doi: "May@2021", doe: "May@2021", cp: "1000", reinz: "1000", cp_reinz: "50", cl: "1000", cp_cl: "50", nzhpi: "1000", cp_nzhpi: "50", status: "Pending", contracts: "25", settled: "0", total: "25" }
      ],
      bondSchedulerList: [
        { bond_pool: "BP100165AU", bond_price: 1100, expiry_date: "01/01/2022" },
        { bond_pool: "BP300169NZ", bond_price: 1100, expiry_date: "01/11/2022" }
      ]
    }
  }
}
</script>
