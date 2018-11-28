<template>
  <div>
    <form class="md-layout md-gutter md-alignment-left">
      <div class="md-layout-item place">
        <md-autocomplete
          v-model="location"
          :md-options="places"
          @md-changed="getValues"
          @md-opened="getValues"
        >
          <label>Location name</label>
          <template slot="md-autocomplete-item" slot-scope="{ item, term }">
            <md-highlight-text :md-term="term">{{ item.fullName }}</md-highlight-text>
            <span class="md-suffix">{{item.score}}</span>
          </template>
        </md-autocomplete>
      </div>
      <div class="md-layout-item coordinate">
        <md-field>
          <label>Latitude</label>
          <md-input v-model="lat" type="number" step="0.01"></md-input>
          <span class="md-suffix">N</span>
        </md-field>
      </div>
      <div class="md-layout-item coordinate">
        <md-field>
          <label>Longitude</label>
          <md-input v-model="lon" type="number" step="0.01"></md-input>
          <span class="md-suffix">W</span>
        </md-field>
      </div>
    </form>
    <div class="detail">
      <md-card class="md-layout md-gutter">
        <md-card-header>
          <div class="md-title">Details</div>
        </md-card-header>
        <md-card-content>
            <md-table v-if="location && typeof(location) === 'object'">
                <md-table-row>
                    <md-table-head>id</md-table-head>
                    <md-table-cell>{{location.id}}</md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-head>Name</md-table-head>
                    <md-table-cell>{{location.name}}</md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-head>{{ location.countryCode == 'US' ? 'State' : 'Province'}}</md-table-head>
                    <md-table-cell>{{location.stateProvince}}</md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-head>Country</md-table-head>
                    <md-table-cell>{{location.countryCode === 'CA' ? 'Canada' : 'United States'}}</md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-head>Coordinates</md-table-head>
                    <md-table-cell>{{location.coordinates[1]}}N {{-location.coordinates[0]}}W</md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-head>Distance</md-table-head>
                    <md-table-cell>{{location.distance}}</md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-head>Score</md-table-head>
                    <md-table-cell>{{location.score}}</md-table-cell>
                </md-table-row>
            </md-table>
        </md-card-content>
      </md-card>
    </div>
    <div class="options">
      <md-card class="md-layout md-gutter">
        <md-card-header>
          <div class="md-title">Options</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout-item max-results">
            <md-field>
              <label>Maximum number of results</label>
              <md-input v-model="max" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-switch v-model="fuzzy">Fuzzy search</md-switch>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import {
  MdAutocomplete,
  MdCard,
  MdField,
  MdHighlightText,
  MdList,
  MdMenu,
  MdSwitch,
  MdTable
} from "vue-material/dist/components";

Vue.use(MdAutocomplete);
Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdHighlightText);
Vue.use(MdList);
Vue.use(MdMenu);
Vue.use(MdSwitch);
Vue.use(MdTable);

export default {
  name: "SearchMenu",
  data: () => ({
    fuzzy: true,
    lat: 45.5,
    lon: 73.57,
    max: 10,
    places: [],
    location: null
  }),
  methods: {
    getValues: function(name) {
      this.fetcher(name || "", `-${this.lon},${this.lat}`, this.max, this.fuzzy);
    },
    fetcher: async function(name, point, max, fuzzy) {
      try {
        name = name.replace(/\s/g,'');
        const url = `http://localhost:8080/suggestions?locationName=${name}&startPoint=${point}&limit=${max}&fuzzy=${fuzzy}`;
        const response = await axios.get(url);
        this.places = response.data;
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<style scoped>
.coordinate {
  flex-shrink: 20%;
}
.place {
  flex-grow: 3;
}
.md-layout {
  width: 100%;
  overflow-x: hidden;
}
.md-card, .md-card-header {
    width: 100%;
}
.max-results {
    flex-grow: 3;
}
.md-card-content .md-layout-item {
    display: inline-flex;
}
.md-card-content .md-field {
    margin-right: 50px;
}
</style>