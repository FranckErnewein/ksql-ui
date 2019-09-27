docker-compose exec connect curl -s -XPOST -H "Content-Type: application/json; charset=UTF-8" http://localhost:8083/connectors/ -d '
{
    "name": "postgres-connector",
    "config": {
      "connector.class":"io.confluent.connect.jdbc.JdbcSourceConnector",
      "tasks.max":"10",
      "connection.url":"jdbc:postgresql://banking:5432/banking?user=me&password=pwd&useSSL=false",
      "mode":"timestamp+incrementing",
      "timestamp.column.name":"updated_at",
      "incrementing.column.name":"id",
      "topic.prefix":"psql-banking-",
      "key.ignore": true,
      "key.converter.schema.registry.url": "http://schema-registry:8082",
      "value.converter": "io.confluent.connect.avro.AvroConverter",
      "value.converter.schema.registry.url": "http://schema-registry:8082",
      "schema.ignore": true

    }
}
' | jq .
