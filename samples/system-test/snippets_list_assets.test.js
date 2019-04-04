/**
 * Copyright 2019, Google, LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
/**
 * @fileoverview Smoke-test for snippets_list_assets.js
 */

const {assert} = require('chai');
const organization_id = process.env['GCLOUD_ORGANIZATION'];

const assets = require('../snippets_list_assets.js');

it('should provide a count of assets', async () => {
  if (organization_id) {
    const count = await assets.listAllAssets(organization_id);

    assert.isAtLeast(count, 59);
  }
});

it('returns count of projects', async () => {
  if (organization_id) {
    const count = await assets.listWithFilters(organization_id);

    assert.equal(3, count);
  }
});

it('with date time returns number of projects', async () => {
  if (organization_id) {
    const count = await assets.listAssetsWithFilterAndReadTime(organization_id);

    assert.equal(3, count);
  }
});

it('with date time and status changes', async () => {
  if (organization_id) {
    const count = await assets.listAssetsAndStateChanges(organization_id);

    assert.equal(3, count);
  }
});
