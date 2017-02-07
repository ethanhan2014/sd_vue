<template>
<form class="col s2">
    <div class="row">
      <div class="input-field col s6">
        <input id="username" type="text" class="validate" v-model="sysinfo.username">
        <label for="username">Username</label>
      </div>
      <div class="input-field col s6">
        <input id="password" type="password" class="validate" v-model="sysinfo.password">
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="host_url" type="url" class="validate" v-model="sysinfo.host">
        <label for="host_url" data-error="wrong" data-success="right">Hostname</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input id="sid" type="text" class="validate" v-model="sysinfo.sid">
        <label for="sid">System ID</label>
      </div>
      <div class="input-field col s6">
        <input id="client" type="text" class="validate" v-model="sysinfo.client">
        <label for="client">Client no.</label>
      </div>
    </div>
    <div class='row'>
      <input type="date" class="datepicker" v-model="sysinfo.date">
    </div>
    <div class='row'>
      <div class="input-field col s6">
        <button class="btn waves-effect waves-light orange" type="submit" name="clear" v-on:click='clear'>
          Clear
        </button>
      </div>
      <div class="input-field col s6">
        <button class="btn waves-effect waves-light green" type="submit" name="graph" v-on:click="submit()">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        sysinfo: {
          username: '',
          password: '',
          host: '',
          sid: '',
          client: '',
          date: '',
        },
      };
    },
    methods: {
      submit() {
        event.preventDefault();
        console.log(this.$router);
        this.$router.go('/components/graph');
      },
      clear() {
        event.preventDefault();
        this.sysinfo.username = '';
      },
    },
  };
</script>
