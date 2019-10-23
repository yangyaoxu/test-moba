<template>
  <div>
    <h1>{{this.id ? '编辑' : '新增'}}分类</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-tabs value="basic" type="border-card">
        <el-tab-pane label="基础信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res => $set(model, 'avatar', res.url)"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="Banner">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res => $set(model, 'banner', res.url)"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item in categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              style="margin-top:0.6rem"
              :max="10"
              show-score
              v-model="model.scores.difficult"
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate style="margin-top: 0.6rem" :max="10" show-score v-model="model.scores.skills"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate style="margin-top: 0.6rem" :max="10" show-score v-model="model.scores.attack"></el-rate>
          </el-form-item>
          <el-form-item label="生成">
            <el-rate style="margin-top: 0.6rem" :max="10" show-score v-model="model.scores.survive"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战技巧">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button size="small" @click="model.skills.push({})">
            <i class="el-icon-plus"></i>添加技能
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, i) in model.skills" :key="i">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="res => $set(item, 'icon', res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item label="消耗">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>

              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input v-model="item.tips" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.skills.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button size="small" @click="model.partners.push({})">
              <i class="el-icon-plus"></i>添加英雄
          </el-button>
          <el-row type="flex" style="flex-wrap:wrap">
              <el-col :md="12" v-for="(item, i) in model.partners" :key="i">
                <el-form-item label="英雄">
                  <el-select filterable v-model="item.hero">
                    <el-option
                    v-for="hero in heroes"
                    :key="hero._id"
                    :value="hero._id"
                    :label="hero.name"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                   <el-input v-model="item.description" type="textarea"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button size="small" type="danger" @click="model.partners.splice(i, 1)">删除</el-button>
                </el-form-item>
              </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top: 1rem;">
        <el-button native-type="submit" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      categories: [],
      items: [],
      heroes: [],
      model: {
        name: "",
        avatar: "",
        skills: [],
        partners: [],
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        }
      }
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/reset/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
    async categoriesFetch() {
      const res = await this.$http.get("/reset/categories");
      this.categories = res.data;
    },
    async itemsFetch() {
      const res = await this.$http.get("/reset/items");
      this.items = res.data;
    },
    async heroesFetch() {
      const res = await this.$http.get('/reset/heroes')
      this.heroes = res.data
    },
    async save() {
      if (this.id) {
        await this.$http.put(`/reset/heroes/${this.id}`, this.model);
      } else {
        await this.$http.post("/reset/heroes", this.model);
      }
      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    }
  },
  created() {
    this.categoriesFetch()
    this.itemsFetch()
    this.heroesFetch()
    this.id && this.fetch()
  }
};
</script>
