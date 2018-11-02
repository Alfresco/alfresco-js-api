# .SearchApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/search/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **POST** /search | Searches Alfresco


<a name="search"></a>
# **search**
> ResultSetPaging search(queryBody)

Searches Alfresco

**Note**: this endpoint is available in Alfresco 5.2 and newer versions.

**You specify all the parameters in this API in a JSON body**, URL parameters are not supported.
A basic query looks like this:

JSON
{
  \&quot;query\&quot;: {
    \&quot;query\&quot;: \&quot;foo\&quot;
  }
}


**Note:** These are the minimum possible query parameters.

The default search language is **afts** ([Alfresco Full Text Search](http://docs.alfresco.com/5.1/concepts/rm-searchsyntax-intro.html)), but you can also specify **cmis**, and **lucene**.

A basic CMIS query looks like this:

JSON
{
  \&quot;query\&quot;: {
    \&quot;query\&quot;: \&quot;select * from cmis:folder\&quot;,
    \&quot;language\&quot;: \&quot;cmis\&quot;
  }
}


By default, **results are limited to the first 100.**
Results can be restricted using \&quot;paging\&quot;. For example:
JSON
\&quot;paging\&quot;: {
  \&quot;maxItems\&quot;: \&quot;50\&quot;,
  \&quot;skipCount\&quot;: \&quot;28\&quot;
}

This example would ensure that results are **limited by Final Size**,
skipping the first 28 results and returning the next 50.

Alternatively, you can limit the results by using the **limits JSON body parameter**. For example,
JSON
\&quot;limits\&quot;: {
  \&quot;permissionEvaluationTime\&quot;: 20000,
  \&quot;permissionEvaluationCount\&quot;: 2000
}


You can use the **include JSON body parameter** to return additional information.
This works in the same way as in the /nodes/{nodeId}/children method in the core API. For example:
JSON
\&quot;include\&quot;: [\&quot;aspectNames\&quot;, \&quot;properties\&quot;, \&quot;isLink\&quot;]


You can use the **fields JSON body parameter** to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.
This works in the same way as in the /nodes/{nodeId}/children method in the core API. For example:
JSON
\&quot;fields\&quot;: [\&quot;id\&quot;, \&quot;name\&quot;, \&quot;search\&quot;]


You can sort the results using the **sort JSON body parameter**, for example:
JSON
\&quot;sort\&quot;: [{\&quot;type\&quot;:\&quot;FIELD\&quot;, \&quot;field\&quot;:\&quot;cm:description\&quot;, \&quot;ascending\&quot;:\&quot;true\&quot;}]

**Note:** the **sort** parameter is not supported for CMIS queries.

By default, search uses the **\&quot;nodes\&quot; location**, which is the **content store known as workspace://SpacesStore**.
To change the scope to another location you can use the **locations JSON body parameter**. You can specify either **nodes** (the default), **versions** or **deleted-nodes**.  For example,
JSON
\&quot;scope\&quot;: {
    \&quot;locations\&quot;: [\&quot;deleted-nodes\&quot;]
}

You can specify templates using the **templates JSON body parameter**, for example:
JSON
\&quot;templates\&quot;: [{\&quot;name\&quot;: \&quot;_PERSON\&quot;,\&quot;template\&quot;: \&quot;|%firstName OR |%lastName OR |%userName\&quot;},
              {\&quot;name\&quot;: \&quot;mytemplate\&quot;,\&quot;template\&quot;: \&quot;%cm:content\&quot;}]


**Note: Spell checking only works on Search Services (Solr 6) if you have already enabled suggestions.**

For **spell checking** you can use a query like this:
JSON
{
  \&quot;query\&quot;: {
    \&quot;query\&quot;: \&quot;cm:title:alfrezco\&quot;
  },
  \&quot;spellcheck\&quot;: {\&quot;query\&quot;: \&quot;alfrezco\&quot;}
}


If you are already specifying \&quot;userQuery\&quot; then the following may be easier
and produces the same result :
JSON
{
  \&quot;query\&quot;: {
    \&quot;query\&quot;: \&quot;cm:title:alfrezco\&quot;,
    \&quot;userQuery\&quot;: \&quot;alfrezco\&quot;
  },
  \&quot;spellcheck\&quot;: {}
}


The spellcheck response includes a spellCheck context like this:
JSON
\&quot;context\&quot;: {
  \&quot;spellCheck\&quot;: {
    \&quot;type\&quot;: \&quot;searchInsteadFor\&quot;,
    \&quot;suggestions\&quot;: [\&quot;alfresco\&quot;]
  }
},


To specify defaults, you  use a **defaults JSON body parameter**, for example:
JSON
\&quot;defaults\&quot;: {
  \&quot;textAttributes\&quot;: [
    \&quot;cm:content\&quot;, \&quot;cm:name\&quot;
  ],
  \&quot;defaultFTSOperator\&quot;: \&quot;AND\&quot;,
  \&quot;defaultFTSFieldOperator\&quot;: \&quot;OR\&quot;,
  \&quot;namespace\&quot;: \&quot;cm\&quot;,
  \&quot;defaultFieldName\&quot;: \&quot;PATH\&quot;
}


You can specify several filter queries using the **filterQueries JSON body parameter**, for example:
JSON
\&quot;filterQueries\&quot;: [{\&quot;query\&quot;: \&quot;TYPE:&#39;cm:folder&#39;\&quot;},{\&quot;query\&quot;: \&quot;cm:creator:mjackson\&quot;}]


You can specify several facet queries using the **facetQueries JSON body parameter**, for example:
JSON
\&quot;facetQueries\&quot;: [{\&quot;query\&quot;: \&quot;created:2016\&quot;,\&quot;label\&quot;: \&quot;CreatedThisYear\&quot;}]

The response will contain a matching \&quot;context\&quot; section, the \&quot;label\&quot; will match the facet query.
JSON
\&quot;context\&quot;: {
  \&quot;facetQueries\&quot;: [
    {\&quot;label\&quot;: \&quot;CreatedThisYear\&quot;,\&quot;count\&quot;: 3}
  ]
},


A complete query for facetting via the content.size field looks this:
JSON
{
  \&quot;query\&quot;: {
    \&quot;query\&quot;: \&quot;presentation\&quot;,
    \&quot;language\&quot;: \&quot;afts\&quot;
  },
    \&quot;facetQueries\&quot;: [
        {\&quot;query\&quot;: \&quot;content.size:[0 TO 10240]\&quot;, \&quot;label\&quot;: \&quot;xtra small\&quot;},
        {\&quot;query\&quot;: \&quot;content.size:[10240 TO 102400]\&quot;, \&quot;label\&quot;: \&quot;small\&quot;},
        {\&quot;query\&quot;: \&quot;content.size:[102400 TO 1048576]\&quot;, \&quot;label\&quot;: \&quot;medium\&quot;},
        {\&quot;query\&quot;: \&quot;content.size:[1048576 TO 16777216]\&quot;, \&quot;label\&quot;: \&quot;large\&quot;},
        {\&quot;query\&quot;: \&quot;content.size:[16777216 TO 134217728]\&quot;, \&quot;label\&quot;: \&quot;xtra large\&quot;},
        {\&quot;query\&quot;: \&quot;content.size:[134217728 TO MAX]\&quot;, \&quot;label\&quot;: \&quot;XX large\&quot;}
  ],
    \&quot;facetFields\&quot;: {\&quot;facets\&quot;: [{\&quot;field\&quot;: \&quot;&#39;content.size&#39;\&quot;}]}
}


The response will contain a matching \&quot;context\&quot; section, the \&quot;label\&quot; will match the facet query.
JSON
\&quot;context\&quot;: {
  \&quot;facetQueries\&quot;: [
    { \&quot;label\&quot;: \&quot;small\&quot;,\&quot;count\&quot;: 2 },
    { \&quot;label\&quot;: \&quot;large\&quot;,\&quot;count\&quot;: 0 },
    { \&quot;label\&quot;: \&quot;xtra small\&quot;,\&quot;count\&quot;: 5 },
    { \&quot;label\&quot;: \&quot;xtra large\&quot;,\&quot;count\&quot;: 56},
    { \&quot;label\&quot;: \&quot;medium\&quot;,\&quot;count\&quot;: 4 },
    { \&quot;label\&quot;: \&quot;XX large\&quot;, \&quot;count\&quot;: 1 }
  ]
},


You can specify several facet fields using the **facetFields JSON body parameter**, for example:
JSON
\&quot;facetFields\&quot;: {\&quot;facets\&quot;: [{\&quot;field\&quot;: \&quot;creator\&quot;, \&quot;mincount\&quot;: 1}, {\&quot;field\&quot;: \&quot;modifier\&quot;, \&quot;mincount\&quot;: 1}]}

The response will contain a matching \&quot;context\&quot; section, the \&quot;label\&quot; will match the facet field.
JSON
\&quot;context\&quot;: {
   \&quot;facetsFields\&quot;: [
     {  \&quot;label\&quot;: \&quot;creator\&quot;,
        \&quot;buckets\&quot;: [
          { \&quot;label\&quot;: \&quot;System\&quot;, \&quot;count\&quot;: 75 },
          { \&quot;label\&quot;: \&quot;mjackson\&quot;, \&quot;count\&quot;: 5 }
        ]},
     {  \&quot;label\&quot;: \&quot;modifier\&quot;,
        \&quot;buckets\&quot;: [
          { \&quot;label\&quot;: \&quot;System\&quot;, \&quot;count\&quot;: 72 },
          { \&quot;label\&quot;: \&quot;mjackson\&quot;, \&quot;count\&quot;: 5 },
          { \&quot;label\&quot;: \&quot;admin\&quot;, \&quot;count\&quot;: 3 }
        ]}
   ]
},


Grouping facet queries that go together can be done by specifying the group label in the fact queries as follow:
JSON
    {
        \&quot;query\&quot;: {
            \&quot;query\&quot;: \&quot;presentation\&quot;
        },
        \&quot;facetQueries\&quot;: [
            {\&quot;query\&quot;: \&quot;content.size:[0 TO 102400]\&quot;, \&quot;label\&quot;: \&quot;small\&quot;, \&quot;group\&quot;:\&quot;foo\&quot;},
            {\&quot;query\&quot;: \&quot;content.size:[102400 TO 1048576]\&quot;, \&quot;label\&quot;: \&quot;medium\&quot;,\&quot;group\&quot;:\&quot;foo\&quot;},
            {\&quot;query\&quot;: \&quot;content.size:[1048576 TO 16777216]\&quot;, \&quot;label\&quot;: \&quot;large\&quot;,\&quot;group\&quot;:\&quot;foo\&quot;}
        ]
    }

The above query returns the results a faceted field grouped under the label foo:
JSON
{
    \&quot;context\&quot;: {\&quot;facetsFields\&quot;: [{
        \&quot;label\&quot;: \&quot;foo\&quot;,
        \&quot;buckets\&quot;: [
            {
                \&quot;count\&quot;: 109,
                \&quot;label\&quot;: \&quot;small\&quot;,
                \&quot;filterQuery\&quot;: \&quot;content.size:[0 TO 102400]\&quot;
            },
            {
                \&quot;count\&quot;: 0,
                \&quot;label\&quot;: \&quot;large\&quot;,
                \&quot;filterQuery\&quot;: \&quot;content.size:[1048576 TO 16777216]\&quot;
            },
            {
                \&quot;count\&quot;: 0,
                \&quot;label\&quot;: \&quot;medium\&quot;,
                \&quot;filterQuery\&quot;: \&quot;content.size:[102400 TO 1048576]\&quot;
            }
        ]
    }]
}

Range Faceting is supported by the **ranges JSON body parameter**, for example:
JSON
    {
        \&quot;query\&quot;: {
            \&quot;query\&quot;: \&quot;presentation\&quot;
        },
        \&quot;ranges\&quot;: [
        {
            \&quot;field\&quot;: \&quot;content.size\&quot;,
             \&quot;start\&quot;: \&quot;0\&quot;,
             \&quot;end\&quot;: \&quot;100\&quot;,
             \&quot;gap\&quot;: \&quot;20\&quot;,
             \&quot;hardend\&quot;: true
        },
        {
            \&quot;field\&quot;: \&quot;created\&quot;,
            \&quot;start\&quot;: \&quot;2015-09-29T10:45:15.729Z\&quot;,
            \&quot;end\&quot;: \&quot;2016-09-29T10:45:15.729Z\&quot;,
            \&quot;gap\&quot;: \&quot;+100DAY\&quot;
        }]
    }

An example query for **search highlighting** could look like this:
JSON
{
  \&quot;query\&quot;: {
    \&quot;query\&quot;: \&quot;description:workflow\&quot;,
    \&quot;userQuery\&quot;:\&quot;workflow\&quot;
  },
  \&quot;highlight\&quot;: {
    \&quot;prefix\&quot;: \&quot;¿\&quot;,
    \&quot;postfix\&quot;: \&quot;?\&quot;,
    \&quot;mergeContiguous\&quot;: true,
    \&quot;fields\&quot;: [
      {
        \&quot;field\&quot;: \&quot;cm:title\&quot;
      },
      {
        \&quot;field\&quot;: \&quot;description\&quot;,
        \&quot;prefix\&quot;: \&quot;(\&quot;,
        \&quot;postfix\&quot;: \&quot;)\&quot;
      }

    ]
  }
}

The example above changes the highlighting prefix and postfix from the
 default &lt;em&gt; for all fields to ¿? and just for the \&quot;description\&quot; field to ().
 The hightlight information is added in each node entry response; here is
 an example partial response:

\&quot;entry\&quot;: {
        \&quot;createdAt\&quot;: \&quot;2016-10-12T15:24:31.202+0000\&quot;,
        \&quot;isFolder\&quot;: true,
        \&quot;search\&quot;: {
          \&quot;score\&quot;: 1,
          \&quot;highlight\&quot;: [
            {
              \&quot;field\&quot;: \&quot;cm:title\&quot;,
              \&quot;snippets\&quot;: [
                \&quot;Customized ¿Workflow? Process Definitions\&quot;
              ]
            },
            {
              \&quot;field\&quot;: \&quot;description\&quot;,
              \&quot;snippets\&quot;: [
                \&quot;Customized (Workflow) Process Definitions\&quot;
              ]
            }
          ]
      },



### Example
```javascript
import SearchApi from 'SearchApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let searchApi = new SearchApi(this.alfrescoApi);


searchApi.search(queryBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryBody** | [**SearchRequest**](SearchRequest.md)| Generic query API
 | 

### Return type

[**ResultSetPaging**](ResultSetPaging.md)

