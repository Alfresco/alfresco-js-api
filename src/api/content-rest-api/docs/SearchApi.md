# AlfrescoContentServicesRestApi.SearchApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/search/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **POST** /search | Searches Alfresco


<a name="search"></a>
# **search**
> ResultSetPaging search(queryBody)

Searches Alfresco


### Example
```javascript
 this.alfrescoJsApi.search.searchApi.search({
        "query": {
            "query": "select * from cmis:folder",
            "language": "cmis"
            }
        }).then(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
```

### Node js Example
```javascript
var AlfrescoApi = require('alfresco-js-api');

this.alfrescoJsApi = new AlfrescoApi();
var self = this;
this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
    console.log('API called successfully Login ticket:' + data);

    self.alfrescoJsApi.search.searchApi.search({
  	"query": {
    "query": "select * from cmis:folder",
    "language": "cmis"
  }
}).then(function (data) {
    console.log(data);
}, function (error) {
    console.error(error);
});
}, function (error) {
    console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchRequest** | [**SearchRequest**](SearchRequest.md)| Generic query API  | 

### Return type

[**ResultSetPaging**](ResultSetPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<div class="content" id="search_search_content" style="display: block;">
        <h4><span data-sw-translate="">Implementation Notes</span></h4>
        <div class="markdown"><p><strong>Note</strong>: this endpoint is available in Alfresco 5.2 and newer versions.</p>
<p><strong>You specify all the parameters in this API in a JSON body</strong>, URL parameters are not supported.
A basic query looks like this:</p>
<pre><code class="lang-JSON json">{
  "<span class="attribute">query</span>": <span class="value">{
    "<span class="attribute">query</span>": <span class="value"><span class="string">"foo"</span>
  }</span>
}</span>
</code></pre>
<p><strong>Note:</strong> These are the minimum possible query parameters.</p>
<p>The default search language is <strong>afts</strong> (<a href="http://docs.alfresco.com/5.1/concepts/rm-searchsyntax-intro.html">Alfresco Full Text Search</a>), but you can also specify <strong>cmis</strong>, and <strong>lucene</strong>.</p>
<p>A basic CMIS query looks like this:</p>
<pre><code class="lang-JSON json">{
  "<span class="attribute">query</span>": <span class="value">{
    "<span class="attribute">query</span>": <span class="value"><span class="string">"select * from cmis:folder"</span></span>,
    "<span class="attribute">language</span>": <span class="value"><span class="string">"cmis"</span>
  }</span>
}</span>
</code></pre>
<p>By default, <strong>results are limited to the first 100.</strong>
Results can be restricted using "paging". For example:</p>
<pre><code class="lang-JSON undefined">"paging": {
  "maxItems": "50",
  "skipCount": "28"
}
</code></pre>
<p>This example would ensure that results are <strong>limited by Final Size</strong>,
skipping the first 28 results and returning the next 50.</p>
<p>Alternatively, you can limit the results by using the <strong>limits JSON body parameter</strong>. For example,</p>
<pre><code class="lang-JSON undefined">"limits": {
  "permissionEvaluationTime": 20000,
  "permissionEvaluationCount": 2000
}
</code></pre>
<p>The <strong>default search uses workspace://SpacesStore</strong>.  To change the scope
to a particular store you can use the <strong>scope JSON body parameter</strong>. For example,</p>
<pre><code class="lang-JSON undefined">"scope": {
    "stores": ["archive://SpacesStore", "workspace://SpacesStore"]
}
</code></pre>
<p>You can use the <strong>include JSON body parameter</strong> to return additional information.
This works in the same way as in the /nodes/{nodeId}/children method in the core API. For example:</p>
<pre><code class="lang-JSON undefined">"include": ["aspectNames", "properties", "isLink"]
</code></pre>
<p>You can use the <strong>fields JSON body parameter</strong> to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.
This works in the same way as in the /nodes/{nodeId}/children method in the core API. For example:</p>
<pre><code class="lang-JSON undefined">"fields": ["id", "name", "search"]
</code></pre>
<p>You can sort the results using the <strong>sort JSON body parameter</strong>, for example:</p>
<pre><code class="lang-JSON undefined">"sort": [{"type":"FIELD", "field":"cm:description", "ascending":"true"}]
</code></pre>
<p><strong>Note:</strong> the <strong>sort</strong> parameter is not supported for CMIS queries.</p>
<p>You can specify templates using the <strong>templates JSON body parameter</strong>, for example:</p>
<pre><code class="lang-JSON undefined">"templates": [{"name": "_PERSON","template": "|%firstName OR |%lastName OR |%userName"},
              {"name": "mytemplate","template": "%cm:content"}]
</code></pre>
<p>For <strong>spell checking</strong> you can use a query like this:</p>
<pre><code class="lang-JSON json">{
  "<span class="attribute">query</span>": <span class="value">{
    "<span class="attribute">query</span>": <span class="value"><span class="string">"cm:title:alfrezco"</span></span>,
    "<span class="attribute">language</span>": <span class="value"><span class="string">"afts"</span>
  }</span></span>,
  "<span class="attribute">spellcheck</span>": <span class="value">{"<span class="attribute">query</span>": <span class="value"><span class="string">"alfrezco"</span>}</span>
}</span>
</code></pre>
<p>If you are already specifying "userQuery" then the following may be easier
and produces the same result :</p>
<pre><code class="lang-JSON json">{
  "<span class="attribute">query</span>": <span class="value">{
    "<span class="attribute">query</span>": <span class="value"><span class="string">"cm:title:alfrezco"</span></span>,
    "<span class="attribute">userQuery</span>": <span class="value"><span class="string">"alfrezco"</span></span>,
    "<span class="attribute">language</span>": <span class="value"><span class="string">"afts"</span>
  }</span></span>,
  "<span class="attribute">spellcheck</span>": <span class="value">{}
}</span>
</code></pre>
<p>The spellcheck response includes a spellCheck context like this:</p>
<pre><code class="lang-JSON undefined">"context": {
  "spellCheck": {
    "type": "searchInsteadFor",
    "suggestions": ["alfresco"]
  }
},
</code></pre>
<p>To specify defaults, you  use a <strong>defaults JSON body parameter</strong>, for example:</p>
<pre><code class="lang-JSON undefined">"defaults": {
  "textAttributes": [
    "cm:content", "cm:name"
  ],
  "defaultFTSOperator": "AND",
  "defaultFTSFieldOperator": "OR",
  "namespace": "cm",
  "defaultFieldName": "PATH"
}
</code></pre>
<p>You can specify several filter queries using the <strong>filterQueries JSON body parameter</strong>, for example:</p>
<pre><code class="lang-JSON undefined">"filterQueries": [{"query": "TYPE:'cm:folder'"},{"query": "cm:creator:mjackson"}]
</code></pre>
<p>You can specify several facet queries using the <strong>facetQueries JSON body parameter</strong>, for example:</p>
<pre><code class="lang-JSON undefined">"facetQueries": [{"query": "created:2016","label": "CreatedThisYear"}]
</code></pre>
<p>The response will contain a matching "context" section, the "label" will match the facet query.</p>
<pre><code class="lang-JSON undefined">"context": {
  "facetQueries": [
    {"label": "CreatedThisYear","count": 3}
  ]
},
</code></pre>
<p>A complete query for facetting via the content.size field looks this:</p>
<pre><code class="lang-JSON json">{
  "<span class="attribute">query</span>": <span class="value">{
    "<span class="attribute">query</span>": <span class="value"><span class="string">"presentation"</span></span>,
    "<span class="attribute">language</span>": <span class="value"><span class="string">"afts"</span>
  }</span></span>,
    "<span class="attribute">facetQueries</span>": <span class="value">[
        {"<span class="attribute">query</span>": <span class="value"><span class="string">"content.size:[0 TO 10240]"</span></span>, "<span class="attribute">label</span>": <span class="value"><span class="string">"xtra small"</span>}</span>,
        {"<span class="attribute">query</span>": <span class="value"><span class="string">"content.size:[10240 TO 102400]"</span></span>, "<span class="attribute">label</span>": <span class="value"><span class="string">"small"</span>}</span>,
        {"<span class="attribute">query</span>": <span class="value"><span class="string">"content.size:[102400 TO 1048576]"</span></span>, "<span class="attribute">label</span>": <span class="value"><span class="string">"medium"</span>}</span>,
        {"<span class="attribute">query</span>": <span class="value"><span class="string">"content.size:[1048576 TO 16777216]"</span></span>, "<span class="attribute">label</span>": <span class="value"><span class="string">"large"</span>}</span>,
        {"<span class="attribute">query</span>": <span class="value"><span class="string">"content.size:[16777216 TO 134217728]"</span></span>, "<span class="attribute">label</span>": <span class="value"><span class="string">"xtra large"</span>}</span>,
        {"<span class="attribute">query</span>": <span class="value"><span class="string">"content.size:[134217728 TO MAX]"</span></span>, "<span class="attribute">label</span>": <span class="value"><span class="string">"XX large"</span>}</span>
  ]</span>,
    "<span class="attribute">facetFields</span>": <span class="value">{"<span class="attribute">facets</span>": <span class="value">[{"<span class="attribute">field</span>": <span class="value"><span class="string">"'content.size'"</span>}</span>]}</span>
}</span>
</code></pre>
<p>The response will contain a matching "context" section, the "label" will match the facet query.</p>
<pre><code class="lang-JSON undefined">"context": {
  "facetQueries": [
    { "label": "small","count": 2 },
    { "label": "large","count": 0 },
    { "label": "xtra small","count": 5 },
    { "label": "xtra large","count": 56},
    { "label": "medium","count": 4 },
    { "label": "XX large", "count": 1 }
  ]
},
</code></pre>
<p>You can specify several facet fields using the <strong>facetFields JSON body parameter</strong>, for example:</p>
<pre><code class="lang-JSON undefined">"facetFields": {"facets": [{"field": "creator", "mincount": 1}, {"field": "modifier", "mincount": 1}]}
</code></pre>
<p>The response will contain a matching "context" section, the "label" will match the facet field.</p>
<pre><code class="lang-JSON undefined">"context": {
   "facetsFields": [
     {  "label": "creator",
        "buckets": [
          { "label": "System", "count": 75 },
          { "label": "mjackson", "count": 5 }
        ]},
     {  "label": "modifier",
        "buckets": [
          { "label": "System", "count": 72 },
          { "label": "mjackson", "count": 5 },
          { "label": "admin", "count": 3 }
        ]}
   ]
},
</code></pre>
<p>An example query for <strong>search highlighting</strong> could look like this:</p>
<pre><code class="lang-JSON json">{
  "<span class="attribute">query</span>": <span class="value">{
    "<span class="attribute">query</span>": <span class="value"><span class="string">"description:workflow"</span></span>,
    "<span class="attribute">userQuery</span>":<span class="value"><span class="string">"workflow"</span>
  }</span></span>,
  "<span class="attribute">highlight</span>": <span class="value">{
    "<span class="attribute">prefix</span>": <span class="value"><span class="string">"¿"</span></span>,
    "<span class="attribute">postfix</span>": <span class="value"><span class="string">"?"</span></span>,
    "<span class="attribute">mergeContiguous</span>": <span class="value"><span class="literal">true</span></span>,
    "<span class="attribute">fields</span>": <span class="value">[
      {
        "<span class="attribute">field</span>": <span class="value"><span class="string">"cm:title"</span>
      }</span>,
      {
        "<span class="attribute">field</span>": <span class="value"><span class="string">"description"</span></span>,
        "<span class="attribute">prefix</span>": <span class="value"><span class="string">"("</span></span>,
        "<span class="attribute">postfix</span>": <span class="value"><span class="string">")"</span>
      }</span>

    ]
  }</span>
}</span>
</code></pre>
<p>The example above changes the highlighting prefix and postfix from the
 default <em> for all fields to ¿? and just for the "description" field to ().
 The hightlight information is added in each node entry response; here is
 an example partial response:</em></p><em>
<pre><code class="undefined">"entry": {
        "createdAt": "2016-10-12T15:24:31.202+0000",
        "isFolder": true,
        "search": {
          "score": 1,
          "highlight": [
            {
              "field": "cm:title",
              "snippets": [
                "Customized ¿Workflow? Process Definitions"
              ]
            },
            {
              "field": "description",
              "snippets": [
                "Customized (Workflow) Process Definitions"
              ]
            }
          ]
      },
</code></pre></em><p><em></em></p>
