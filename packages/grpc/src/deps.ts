/**
 * deps.ts
 *
 * This module re-exports the required methods from the dependant remote Ramda module.
 */

import {
  ChannelCredentials,
  ChannelOptions,
  Client,
  credentials,
  GrpcObject,
  loadPackageDefinition,
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerErrorResponse,
  ServerUnaryCall,
  status,
  UntypedServiceImplementation
} from '@grpc/grpc-js'

import protoLoader, { loadSync } from '@grpc/proto-loader'

import fastify, { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'

import knex, { Knex } from 'knex'

export {
  loadPackageDefinition,
  Server,
  protoLoader,
  loadSync,
  credentials,
  ServerCredentials,
  ChannelCredentials,
  ChannelOptions,
  GrpcObject,
  Client,
  sendUnaryData,
  ServerErrorResponse,
  ServerUnaryCall,
  UntypedServiceImplementation,
  status,
  fastify,
  FastifyReply,
  FastifyRequest,
  z,
  knex,
  Knex
}
