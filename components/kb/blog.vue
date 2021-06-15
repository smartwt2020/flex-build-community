<template>
  <article class="kb-blog px-3">
    <div v-if="data.outdated" class="kb-outdated px-3 py-2 mb-4">
        <i class="fa fa-exclamation-triangle"></i>
        <span class="text-small text-lightest ml-1">{{data.outdatedMessage}} </span>
    </div>

    <div class="space-between">
      <div class="text-x-small text-lightest">
        <span>Created:&nbsp;</span>
        <span class="text-primary">{{data.lastUpdatedTime}}</span>
      </div>
      <div class="text-x-small text-lightest">
        <span><i class="fa fa-eye"></i>&nbsp;</span>
        <span class="text-primary">{{data.docViewCount}}</span>
      </div>
    </div>

    <p class="heading-4 mt-1 text-primary">{{data.question}}</p>

    <div class="tag-container text-small mt-0">
      <tag  v-for="tag in data.tagNames" :key="tag.id" :name="tag" base="kb" class="mr-3 mt-2 text-small">
        {{tag}}
      </tag>
    </div>

    <div class="line my-4"></div>
    <div class="blog-content text-lightest" v-html="content"></div>
  </article>
</template>

<script>
import MarkdownIt from 'markdown-it'
export default {
  name: 'KbBlog',
  props: {
    data: Object
  },
  data: () => ({
    content: ''
  }),
  mounted () {
    const md = new MarkdownIt()
    try {
      this.content = md.render(this.data.answer)
    } catch {
      this.content = 'No Content found'
    }
  }
}
</script>

<style lang="scss" socped>
.kb-blog {
  .kb-outdated {
    background-color: rgba($warning-color,0.25);
    border-radius: 8px;
    i {
      font-size: 14px;
      color: $warning-color
    }
  }
  .line {
    border-top: 1px solid $s1-color-2;
  }
  .blog-content {
    padding-bottom: 20px;
    font-size: 16px;
    p {
      font-size: 1em;
    }
    h1,h2,h3,h4,h5,h6 {
      margin-block-start: 10px;
      margin-block-end: 10px;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    img {
      max-width: 100%;
      padding: 15px;
      margin: auto;
    }
    pre {
      margin: 10px 0px;
      background: $s1-color-0;
      font-size: 0.8em;
      padding: 5px 10px;
      border-radius: 4px;
      border: 1px solid $s1-color-2;
    }
    blockquote {
      background: rgba($s-color-0, 0.1);
      margin: 0px;
      padding: 10px;
      font-style: italic;
      font-weight: 700;
      border-left: 5px solid rgba($s-color-1,0.50);
    }
  }
}
</style>